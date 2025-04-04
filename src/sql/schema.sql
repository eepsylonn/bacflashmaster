
-- Définition des tables pour l'application FlashBac

-- Définir les types d'énumérations
CREATE TYPE user_role AS ENUM ('user', 'admin');
CREATE TYPE question_type AS ENUM ('text', 'mcq', 'audio', 'image');
CREATE TYPE niveau_type AS ENUM ('premiere', 'terminale', 'troisieme', 'quatrieme', 'facile', 'intermediaire', 'avance', 'both');
CREATE TYPE diplome_type AS ENUM ('baccalaureat', 'brevet', 'toeic', 'toefl', 'cambridge', 'ielts', 'tage-mage', 'gmat');

-- Table des profils utilisateurs
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  email TEXT NOT NULL,
  role user_role DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP WITH TIME ZONE
);

-- Table des abonnements
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'inactive',
  price INTEGER,
  currency TEXT,
  interval TEXT,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  next_billing_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table des activités utilisateurs
CREATE TABLE IF NOT EXISTS user_activity (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  activity_type TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  details JSONB
);

-- Table des notifications
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  scheduled_for TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  sent_at TIMESTAMP WITH TIME ZONE
);

-- Table de liaison entre utilisateurs et notifications
CREATE TABLE IF NOT EXISTS user_notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  notification_id UUID REFERENCES notifications(id) ON DELETE CASCADE,
  read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table des préférences utilisateurs
CREATE TABLE IF NOT EXISTS user_preferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  preferred_niveau niveau_type,
  selected_specialities TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table des résultats d'entraînement
CREATE TABLE IF NOT EXISTS training_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  matiere TEXT NOT NULL,
  niveau niveau_type NOT NULL,
  diplome diplome_type,
  date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  nombre_questions INTEGER NOT NULL,
  score INTEGER NOT NULL,
  pourcentage NUMERIC NOT NULL,
  note NUMERIC NOT NULL,
  questions JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Fonction pour mettre à jour le champ updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour le champ updated_at dans la table des abonnements
CREATE TRIGGER update_subscriptions_updated_at
BEFORE UPDATE ON subscriptions
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();

-- Trigger pour mettre à jour le champ updated_at dans la table des profils
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();

-- Trigger pour mettre à jour le champ updated_at dans la table des préférences utilisateurs
CREATE TRIGGER update_user_preferences_updated_at
BEFORE UPDATE ON user_preferences
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();

-- Politique RLS pour profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Les utilisateurs peuvent lire leur propre profil" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Les administrateurs peuvent lire tous les profils" ON profiles
  FOR SELECT USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Les administrateurs peuvent modifier tous les profils" ON profiles
  FOR UPDATE USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Les utilisateurs peuvent modifier leur propre profil" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Politique RLS pour subscriptions
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Les utilisateurs peuvent lire leur propre abonnement" ON subscriptions
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Les administrateurs peuvent lire tous les abonnements" ON subscriptions
  FOR SELECT USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Les administrateurs peuvent modifier tous les abonnements" ON subscriptions
  FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- Politique RLS pour notifications
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Les administrateurs peuvent gérer les notifications" ON notifications
  FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Tous les utilisateurs peuvent lire les notifications" ON notifications
  FOR SELECT USING (true);

-- Politique RLS pour user_notifications
ALTER TABLE user_notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Les utilisateurs peuvent lire leurs propres notifications" ON user_notifications
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Les utilisateurs peuvent marquer leurs notifications comme lues" ON user_notifications
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Les administrateurs peuvent gérer toutes les notifications" ON user_notifications
  FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- Politique RLS pour user_preferences
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Les utilisateurs peuvent lire leurs propres préférences" ON user_preferences
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Les utilisateurs peuvent modifier leurs propres préférences" ON user_preferences
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Les utilisateurs peuvent créer leurs propres préférences" ON user_preferences
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Les administrateurs peuvent gérer toutes les préférences" ON user_preferences
  FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- Politique RLS pour training_results
ALTER TABLE training_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Les utilisateurs peuvent lire leurs propres résultats" ON training_results
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Les utilisateurs peuvent créer leurs propres résultats" ON training_results
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Les administrateurs peuvent gérer tous les résultats" ON training_results
  FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- Fonction pour vérifier si un utilisateur est admin
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  user_role TEXT;
BEGIN
  SELECT role INTO user_role FROM profiles WHERE id = user_id;
  RETURN user_role = 'admin';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour créer un profil automatiquement lors de la création d'un utilisateur
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, username, role)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    CASE 
      WHEN NEW.email = 'admin@example.com' THEN 'admin'::user_role
      ELSE 'user'::user_role
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE PROCEDURE handle_new_user();

-- Créer un compte admin par défaut
-- Note: Ceci est juste pour la démonstration, en production utiliser un compte sécurisé
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, role)
VALUES ('00000000-0000-0000-0000-000000000000', 'admin@example.com', crypt('admin', gen_salt('bf')), now(), 'authenticated')
ON CONFLICT (id) DO NOTHING;

INSERT INTO profiles (id, email, username, role)
VALUES 
('00000000-0000-0000-0000-000000000000', 'admin@example.com', 'admin', 'admin')
ON CONFLICT (id) DO UPDATE SET role = 'admin', username = 'admin';

-- Ajouter quelques flashcards pour le Baccalauréat
CREATE TABLE IF NOT EXISTS flashcards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  matiere TEXT NOT NULL,
  diplome diplome_type,
  niveau niveau_type NOT NULL,
  text TEXT,
  explication TEXT,
  options TEXT[],
  type question_type DEFAULT 'text',
  audio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_by UUID REFERENCES profiles(id)
);

-- Trigger pour mettre à jour le champ updated_at dans la table des flashcards
CREATE TRIGGER update_flashcards_updated_at
BEFORE UPDATE ON flashcards
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();

-- Ajouter des questions pour le Baccalauréat - Philosophie
INSERT INTO flashcards (question, answer, matiere, diplome, niveau, explication)
VALUES 
('Qu''est-ce que la liberté selon Sartre?', 'Pour Sartre, la liberté est une condition fondamentale de l''être humain. L''homme est "condamné à être libre" car il n''existe aucune détermination qui définisse son existence.', 'Philosophie', 'baccalaureat', 'terminale', 'Sartre développe cette idée dans "L''Être et le Néant" (1943). Cette liberté implique une responsabilité totale de l''individu face à ses choix.'),
('Expliquez la distinction entre morale et éthique.', 'La morale renvoie généralement à un ensemble de règles ou principes universels, tandis que l''éthique est plus contextuelle et réfère à la réflexion sur les valeurs qui guident nos actions dans des situations particulières.', 'Philosophie', 'baccalaureat', 'terminale', 'Cette distinction est notamment développée par des philosophes comme Paul Ricoeur dans "Soi-même comme un autre" (1990).'),
('Qu''est-ce que "l''impératif catégorique" de Kant?', 'L''impératif catégorique est une formule morale selon laquelle on doit agir uniquement d''après la maxime qui fait qu''on peut vouloir en même temps qu''elle devienne une loi universelle.', 'Philosophie', 'baccalaureat', 'terminale', 'Kant développe ce concept dans "Fondements de la métaphysique des mœurs" (1785). Il s''agit d''un principe moral inconditionnel qui doit être suivi quelles que soient les circonstances.'),
('Expliquez la théorie du contrat social selon Rousseau.', 'Pour Rousseau, le contrat social est un accord par lequel les individus abandonnent leur liberté naturelle au profit d''une liberté civile, créant ainsi une volonté générale qui représente l''intérêt commun plutôt que la somme des intérêts particuliers.', 'Philosophie', 'baccalaureat', 'terminale', 'Rousseau développe cette théorie dans "Du Contrat Social" (1762). Ce pacte social est le fondement légitime de l''autorité politique selon lui.'),
('Comment Descartes arrive-t-il au "cogito ergo sum"?', 'Descartes arrive au "cogito ergo sum" (je pense donc je suis) par un processus de doute méthodique. En doutant de tout ce qui peut être remis en question, il découvre que la seule certitude est l''acte même de douter, qui implique nécessairement que lui, qui doute, existe.', 'Philosophie', 'baccalaureat', 'terminale', 'Cette démarche est exposée dans les "Méditations métaphysiques" (1641). Le cogito devient le premier principe de sa philosophie, sur lequel il construit tout son système de connaissances.');

-- Ajouter des questions pour le Baccalauréat - Français
INSERT INTO flashcards (question, answer, matiere, diplome, niveau, explication)
VALUES 
('Quelles sont les caractéristiques du mouvement romantique en littérature?', 'Le romantisme se caractérise par l''expression des sentiments personnels, l''exaltation du moi, le goût pour la nature, la mélancolie, la révolte contre les conventions sociales et l''attrait pour le passé historique.', 'Français', 'baccalaureat', 'premiere', 'Les principales figures du romantisme français sont Victor Hugo, Lamartine, Musset, et Chateaubriand. Le mouvement s''est développé au début du XIXe siècle.'),
('Définissez la notion de tragédie classique et ses règles.', 'La tragédie classique française du XVIIe siècle respecte les règles des trois unités (temps, lieu, action), met en scène des personnages nobles confrontés à des dilemmes moraux ou passionnels, et se termine généralement par une catastrophe.', 'Français', 'baccalaureat', 'premiere', 'Les principaux auteurs tragiques classiques sont Corneille et Racine. Ces règles sont notamment théorisées par Boileau dans "L''Art poétique".'),
('Qu''est-ce que le réalisme en littérature? Citez des auteurs représentatifs.', 'Le réalisme est un mouvement littéraire du XIXe siècle qui cherche à représenter la réalité sociale contemporaine de façon objective et précise. Les auteurs représentatifs sont Balzac, Flaubert, Maupassant et Zola.', 'Français', 'baccalaureat', 'premiere', 'Le réalisme s''oppose au romantisme en privilégiant l''observation sociale au lyrisme personnel. Il se développe particulièrement dans le roman, genre considéré comme le plus apte à décrire la société dans sa complexité.'),
('Quelle est la structure d''un sonnet classique?', 'Un sonnet classique comporte 14 vers répartis en deux quatrains suivis de deux tercets. Les rimes sont généralement organisées en ABBA ABBA pour les quatrains, et CCD EED ou CCD EDE pour les tercets.', 'Français', 'baccalaureat', 'premiere', 'Le sonnet a été particulièrement pratiqué par des poètes comme Ronsard à la Renaissance, puis repris par les poètes parnassiens et symbolistes au XIXe siècle.'),
('Expliquez ce qu''est l''argumentation directe et indirecte en littérature.', 'L''argumentation directe expose clairement une thèse et des arguments pour la défendre (essai, discours), tandis que l''argumentation indirecte utilise des procédés implicites comme l''ironie, la fiction ou l''apologue pour convaincre de façon détournée.', 'Français', 'baccalaureat', 'premiere', 'L''argumentation indirecte est particulièrement présente dans des genres comme la fable (La Fontaine), le conte philosophique (Voltaire) ou la satire.');

-- Ajouter des questions pour le Baccalauréat - Histoire
INSERT INTO flashcards (question, answer, matiere, diplome, niveau, explication)
VALUES 
('Quelles sont les principales causes de la Première Guerre mondiale?', 'Les causes principales sont les tensions nationalistes, les rivalités impérialistes, la course aux armements, le système d''alliances militaires (Triple Alliance et Triple Entente) et les crises diplomatiques à répétition dans les Balkans.', 'Histoire', 'baccalaureat', 'premiere', 'L''élément déclencheur fut l''assassinat de l''archiduc François-Ferdinand à Sarajevo le 28 juin 1914, qui a conduit à l''engrenage des alliances.'),
('Expliquez les grandes phases de la guerre froide (1947-1991).', 'La guerre froide peut être divisée en plusieurs phases: l''entrée dans la guerre froide (1947-1953), la coexistence pacifique relative (1953-1962), la détente (1962-1979), le regain de tensions (1979-1985) et la fin de la guerre froide avec Gorbatchev et la chute de l''URSS (1985-1991).', 'Histoire', 'baccalaureat', 'terminale', 'Les moments clés incluent le blocus de Berlin, la crise des missiles de Cuba, la guerre du Vietnam, l''invasion soviétique de l''Afghanistan et la chute du mur de Berlin.'),
('Quels sont les principes fondamentaux de la Ve République française?', 'Les principes fondamentaux sont le renforcement du pouvoir exécutif avec un président fort, le bicamérisme inégalitaire, le contrôle de constitutionnalité par le Conseil constitutionnel, et la rationalisation du parlementarisme.', 'Histoire', 'baccalaureat', 'terminale', 'La Constitution de la Ve République a été rédigée en 1958 sous l''influence du général de Gaulle pour remédier à l''instabilité gouvernementale de la IVe République.'),
('Décrivez les principales étapes de la décolonisation après 1945.', 'La décolonisation s''est déroulée en plusieurs vagues: l''indépendance de l''Inde et du Pakistan (1947), les indépendances en Asie (1945-1954), la première vague africaine après la conférence de Bandung (1955-1960), puis les indépendances plus tardives et conflictuelles (Algérie, colonies portugaises, Zimbabwe).', 'Histoire', 'baccalaureat', 'terminale', 'Ce processus a été influencé par la pression des mouvements nationalistes locaux, le contexte de guerre froide et l''affaiblissement des puissances coloniales après la Seconde Guerre mondiale.'),
('Quelles ont été les conséquences politiques et sociales de la Révolution française?', 'La Révolution française a conduit à l''abolition des privilèges et de la monarchie absolue, l''établissement d''un régime constitutionnel, la Déclaration des droits de l''homme et du citoyen, la sécularisation de l''État, la suppression du système féodal et corporatif, et l''émergence d''une société plus égalitaire en droit.', 'Histoire', 'baccalaureat', 'premiere', 'Ces transformations ont servi de modèle aux mouvements libéraux et démocratiques dans toute l''Europe au XIXe siècle, malgré la période de la Terreur et le reflux sous l''Empire napoléonien.');

-- Ajouter des questions pour le Baccalauréat - Géographie
INSERT INTO flashcards (question, answer, matiere, diplome, niveau, explication)
VALUES 
('Quels sont les principaux enjeux de la mondialisation contemporaine?', 'Les principaux enjeux sont l''intensification des échanges commerciaux, la financiarisation de l''économie, les inégalités croissantes entre territoires, les défis environnementaux, les questions migratoires et la diffusion culturelle mondiale.', 'Géographie', 'baccalaureat', 'terminale', 'La mondialisation est un processus multidimensionnel qui touche l''économie, la politique, la culture et l''environnement à l''échelle planétaire.'),
('Comment peut-on définir et mesurer le développement d''un territoire?', 'Le développement peut être défini comme l''amélioration des conditions de vie matérielles et sociales. Il est mesuré par des indicateurs comme le PIB/habitant, l''IDH (Indice de Développement Humain), l''indice de Gini, l''accès aux services essentiels ou l''espérance de vie.', 'Géographie', 'baccalaureat', 'premiere', 'La notion de développement a évolué pour intégrer des dimensions non économiques comme la durabilité environnementale, l''équité sociale ou la gouvernance démocratique.'),
('Quelles sont les caractéristiques des métropoles mondiales?', 'Les métropoles mondiales se caractérisent par leur taille démographique importante, leur rayonnement économique international, la concentration des fonctions de commandement, leur connectivité aux réseaux mondiaux, leur diversité culturelle et leur attractivité touristique et migratoire.', 'Géographie', 'baccalaureat', 'premiere', 'New York, Londres, Tokyo et Paris sont des exemples emblématiques de métropoles mondiales de premier rang. Chaque métropole a cependant des spécificités liées à son histoire et à son contexte régional.'),
('Quels sont les différents types d''espaces ruraux en France et leurs évolutions?', 'On distingue les espaces ruraux périurbains (sous influence urbaine), les espaces ruraux dynamiques (tourisme, agriculture productive), et les espaces ruraux en déprise. L''évolution générale montre une diversification des fonctions (résidentielle, récréative, environnementale) au-delà de la seule agriculture.', 'Géographie', 'baccalaureat', 'terminale', 'La ruralité française a connu de profondes mutations depuis les années 1960: mécanisation agricole, exode rural puis retour vers certains espaces ruraux, développement des résidences secondaires et du tourisme vert.'),
('Quels sont les enjeux géopolitiques liés aux ressources énergétiques?', 'Les enjeux géopolitiques des ressources énergétiques incluent: la compétition pour l''accès aux gisements, la sécurisation des voies d''approvisionnement, les tensions entre pays producteurs et consommateurs, la transition énergétique face au changement climatique, et la recherche d''indépendance énergétique nationale.', 'Géographie', 'baccalaureat', 'terminale', 'Ces enjeux se manifestent dans des régions comme le Moyen-Orient, la mer Caspienne, l''Arctique ou la mer de Chine méridionale, et influencent fortement les relations internationales.');

-- Ajouter des questions pour le Baccalauréat - EMC (Enseignement Moral et Civique)
INSERT INTO flashcards (question, answer, matiere, diplome, niveau, explication)
VALUES 
('Quels sont les grands principes de la République française?', 'Les grands principes sont: la liberté, l''égalité, la fraternité, la laïcité, la démocratie, l''indivisibilité de la République, et le caractère social de l''État.', 'EMC', 'baccalaureat', 'premiere', 'Ces principes sont inscrits dans la Constitution et déterminent les droits et devoirs des citoyens ainsi que l''organisation des pouvoirs publics.'),
('Comment définir et garantir la laïcité en France?', 'La laïcité est le principe de séparation des institutions publiques et des organisations religieuses, et d''impartialité de l''État vis-à-vis de toutes les croyances. Elle garantit la liberté de conscience et assure l''égalité des citoyens sans distinction de religion.', 'EMC', 'baccalaureat', 'terminale', 'Établie par la loi de 1905, la laïcité française se distingue d''autres modèles comme le multiculturalisme anglo-saxon ou les États confessionnels.'),
('Quelles sont les différentes formes d''engagement citoyen dans la démocratie?', 'L''engagement citoyen peut prendre la forme du vote, de l''adhésion à un parti politique, du militantisme associatif, du bénévolat, de la participation à des consultations publiques, du service civique, ou encore de l''engagement numérique et des mobilisations ponctuelles.', 'EMC', 'baccalaureat', 'premiere', 'Ces différentes formes d''engagement répondent à l''évolution des sociétés démocratiques et à la diversification des attentes citoyennes.'),
('Comment les médias contribuent-ils au débat démocratique?', 'Les médias contribuent au débat démocratique en informant les citoyens, en jouant un rôle de contre-pouvoir, en favorisant la pluralité des opinions, en organisant le débat public et en permettant l''émergence de nouvelles préoccupations sociales ou environnementales.', 'EMC', 'baccalaureat', 'terminale', 'Cependant, leur rôle est parfois critiqué en raison de la concentration des groupes médiatiques, de la marchandisation de l''information ou de la diffusion de fausses nouvelles.'),
('Quels sont les principaux défis pour la défense des droits de l''homme dans le monde contemporain?', 'Les principaux défis sont la persistance des régimes autoritaires, les inégalités économiques et sociales, les discriminations de genre et ethniques, les atteintes à la liberté d''expression, les conflits armés, le terrorisme et les violations des droits sous prétexte de sécurité nationale.', 'EMC', 'baccalaureat', 'terminale', 'Face à ces défis, diverses organisations internationales, ONG et mobilisations citoyennes œuvrent pour la défense des droits humains à l''échelle mondiale.');

-- Ajouter des questions pour le Baccalauréat - Anglais
INSERT INTO flashcards (question, answer, matiere, diplome, niveau, explication)
VALUES 
('What are the main differences between British and American English?', 'The main differences include vocabulary (lift/elevator, flat/apartment), spelling (colour/color, centre/center), pronunciation, grammar usage (present perfect/simple past), and cultural references.', 'Anglais', 'baccalaureat', 'premiere', 'These variations reflect the separate historical development of the language in different geographical contexts, while maintaining mutual intelligibility.'),
('Describe the civil rights movement in the United States.', 'The civil rights movement (1950s-1960s) fought against racial segregation and discrimination. Led by figures like Martin Luther King Jr., it used nonviolent protest, civil disobedience, and legal challenges to secure rights for African Americans, culminating in legislation like the Civil Rights Act of 1964.', 'Anglais', 'baccalaureat', 'terminale', 'The movement transformed American society and inspired other social justice movements worldwide, though racial equality remains an ongoing struggle.'),
('How has Brexit affected the United Kingdom and its relations with Europe?', 'Brexit has led to new trade barriers with the EU, reduced immigration from Europe, tensions in Northern Ireland, political polarization in the UK, and a reconfiguration of Britain''s diplomatic relationships. The long-term economic and geopolitical consequences are still unfolding.', 'Anglais', 'baccalaureat', 'premiere', 'The 2016 referendum result (52% leave, 48% remain) revealed deep divisions in British society about national identity and globalization.'),
('What is the American Dream and how has its perception evolved?', 'The American Dream is the belief that anyone can achieve success and prosperity through hard work and determination. Its perception has evolved from the frontier spirit to post-WWII material prosperity, and now faces criticism due to growing inequality, declining social mobility, and environmental concerns.', 'Anglais', 'baccalaureat', 'terminale', 'This concept remains central to American identity but is increasingly questioned in contemporary literature, film, and social discourse.'),
('Discuss the impact of social media on modern communication and society.', 'Social media has transformed communication by enabling instant global connection, citizen journalism, and new forms of self-expression. However, it has also created challenges including privacy concerns, misinformation, filter bubbles, cyberbullying, and addiction issues, fundamentally changing how we interact.', 'Anglais', 'baccalaureat', 'premiere', 'The rapid growth of platforms like Facebook, Twitter, Instagram, and TikTok has disrupted traditional media and created new cultural and political dynamics worldwide.');
