
import { Flashcard } from '@/types';

// 110 flashcards pour le programme de mathématiques de première
const mathPremiereFlashcards: Flashcard[] = [
  {
    id: 'math-prem-1',
    question: 'Quelle est la définition d\'une fonction dérivable en un point?',
    answer: 'Une fonction est dérivable en un point si elle admet une tangente en ce point.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-2',
    question: 'Comment calcule-t-on la dérivée de f(x) = x²?',
    answer: 'f\'(x) = 2x',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-3',
    question: 'Quelle est la dérivée de f(x) = sin(x)?',
    answer: 'f\'(x) = cos(x)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-4',
    question: 'Quelle est la dérivée de f(x) = cos(x)?',
    answer: 'f\'(x) = -sin(x)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-5',
    question: 'Quelle est la formule de la dérivée d\'une somme de fonctions?',
    answer: '(f + g)\' = f\' + g\'',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-6',
    question: 'Quelle est la formule de la dérivée d\'un produit de fonctions?',
    answer: '(f × g)\' = f\' × g + f × g\'',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-7',
    question: 'Quelle est la formule de la dérivée d\'un quotient de fonctions?',
    answer: '(f/g)\' = (f\'g - fg\')/g²',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-8',
    question: 'Quelle est la dérivée de la fonction constante f(x) = k?',
    answer: 'f\'(x) = 0',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-9',
    question: 'Quelle est la dérivée de f(x) = x^n où n est un entier?',
    answer: 'f\'(x) = n×x^(n-1)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-10',
    question: 'Quel est le lien entre la dérivée et la croissance d\'une fonction?',
    answer: 'Si f\'(x) > 0 sur un intervalle, alors f est strictement croissante sur cet intervalle.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-11',
    question: 'Comment détermine-t-on les extrema locaux d\'une fonction?',
    answer: 'On cherche les points où f\'(x) = 0 ou f\'(x) n\'existe pas, puis on étudie le signe de la dérivée autour de ces points.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-12',
    question: 'Qu\'est-ce qu\'une suite arithmétique?',
    answer: 'Une suite (u_n) où la différence entre deux termes consécutifs est constante: u_{n+1} - u_n = r (raison).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-13',
    question: 'Quelle est la formule du terme général d\'une suite arithmétique?',
    answer: 'u_n = u_0 + n×r, où r est la raison.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-14',
    question: 'Quelle est la formule de la somme des n premiers termes d\'une suite arithmétique?',
    answer: 'S_n = n×(u_1 + u_n)/2 ou S_n = n×(2u_1 + (n-1)×r)/2',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-15',
    question: 'Qu\'est-ce qu\'une suite géométrique?',
    answer: 'Une suite (u_n) où le quotient de deux termes consécutifs est constant: u_{n+1}/u_n = q (raison).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-16',
    question: 'Quelle est la formule du terme général d\'une suite géométrique?',
    answer: 'u_n = u_0 × q^n, où q est la raison.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-17',
    question: 'Quelle est la formule de la somme des n premiers termes d\'une suite géométrique?',
    answer: 'S_n = u_1×(1-q^n)/(1-q) pour q≠1',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-18',
    question: 'Quelles sont les propriétés de la fonction exponentielle?',
    answer: 'f(x) = e^x est strictement positive, strictement croissante sur ℝ, dérivable avec f\'(x) = f(x), et vérifie f(x+y) = f(x)×f(y).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-19',
    question: 'Qu\'est-ce qu\'une probabilité conditionnelle?',
    answer: 'La probabilité d\'un événement A sachant qu\'un événement B est réalisé, notée P(A|B) = P(A∩B)/P(B) avec P(B)≠0.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-20',
    question: 'Qu\'est-ce que la formule des probabilités totales?',
    answer: 'Si (A₁, A₂, ..., A_n) forme une partition de l\'univers, alors P(B) = P(B|A₁)×P(A₁) + P(B|A₂)×P(A₂) + ... + P(B|A_n)×P(A_n).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-21',
    question: 'Quand deux événements sont-ils indépendants?',
    answer: 'Deux événements A et B sont indépendants si P(A∩B) = P(A)×P(B), ou de manière équivalente si P(A|B) = P(A) lorsque P(B)≠0.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-22',
    question: 'Qu\'est-ce qu\'une variable aléatoire?',
    answer: 'Une fonction qui associe à chaque issue possible d\'une expérience aléatoire un nombre réel.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-23',
    question: 'Comment calcule-t-on l\'espérance d\'une variable aléatoire discrète?',
    answer: 'E(X) = Σ x_i × P(X = x_i) pour tous les x_i possibles.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-24',
    question: 'Comment calcule-t-on la variance d\'une variable aléatoire?',
    answer: 'V(X) = E(X²) - E(X)² ou V(X) = Σ (x_i - E(X))² × P(X = x_i)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-25',
    question: 'Quelle est la formule de l\'écart-type?',
    answer: 'σ(X) = √V(X)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-26',
    question: 'Qu\'est-ce qu\'un second degré?',
    answer: 'Une expression de la forme ax² + bx + c, où a ≠ 0.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-27',
    question: 'Quelle est la formule du discriminant d\'un polynôme du second degré?',
    answer: 'Δ = b² - 4ac pour un polynôme ax² + bx + c',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-28',
    question: 'Comment résout-on une équation du second degré?',
    answer: 'On calcule Δ = b² - 4ac. Si Δ > 0, deux solutions: x1 = (-b-√Δ)/(2a) et x2 = (-b+√Δ)/(2a). Si Δ = 0, une solution: x = -b/(2a). Si Δ < 0, pas de solution réelle.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-29',
    question: 'Quelle est la forme canonique d\'un polynôme du second degré?',
    answer: 'P(x) = a(x-α)² + β où α = -b/(2a) et β = c - b²/(4a)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-30',
    question: 'Qu\'est-ce que le produit scalaire de deux vecteurs?',
    answer: 'Si u⃗ = (x₁, y₁) et v⃗ = (x₂, y₂), alors u⃗·v⃗ = x₁x₂ + y₁y₂. Aussi égal à |u⃗|·|v⃗|·cos(θ) où θ est l\'angle entre les vecteurs.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-31',
    question: 'Quand deux vecteurs sont-ils orthogonaux?',
    answer: 'Deux vecteurs u⃗ et v⃗ sont orthogonaux si et seulement si leur produit scalaire est nul: u⃗·v⃗ = 0.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-32',
    question: 'Qu\'est-ce qu\'un produit en croix?',
    answer: 'Dans une proportion a/b = c/d, le produit en croix donne a×d = b×c.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-33',
    question: 'Quelle est la formule du périmètre d\'un cercle?',
    answer: 'P = 2πr, où r est le rayon du cercle.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-34',
    question: 'Quelle est la formule de l\'aire d\'un cercle?',
    answer: 'A = πr², où r est le rayon du cercle.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-35',
    question: 'Quelle est la formule du volume d\'une sphère?',
    answer: 'V = (4/3)πr³, où r est le rayon de la sphère.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-36',
    question: 'Comment calcule-t-on la distance entre deux points dans un plan?',
    answer: 'Si A(x₁, y₁) et B(x₂, y₂), alors d(A,B) = √[(x₂-x₁)² + (y₂-y₁)²]',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-37',
    question: 'Quelle est l\'équation d\'une droite sous forme générale?',
    answer: 'ax + by + c = 0, où a et b ne sont pas tous deux nuls.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-38',
    question: 'Quelle est l\'équation d\'une droite sous forme réduite?',
    answer: 'y = mx + p, où m est le coefficient directeur et p l\'ordonnée à l\'origine.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-39',
    question: 'Qu\'est-ce que le coefficient directeur d\'une droite?',
    answer: 'La tangente de l\'angle que fait la droite avec l\'axe des abscisses, représente la pente de la droite.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-40',
    question: 'Comment détermine-t-on si deux droites sont parallèles?',
    answer: 'Deux droites sont parallèles si et seulement si leurs coefficients directeurs sont égaux.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-41',
    question: 'Comment détermine-t-on si deux droites sont perpendiculaires?',
    answer: 'Deux droites de coefficients directeurs m₁ et m₂ sont perpendiculaires si et seulement si m₁×m₂ = -1.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-42',
    question: 'Qu\'est-ce qu\'un vecteur directeur d\'une droite?',
    answer: 'Un vecteur non nul parallèle à la droite. Si la droite a pour équation ax + by + c = 0, alors un vecteur directeur est (b, -a).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-43',
    question: 'Qu\'est-ce qu\'un vecteur normal d\'une droite?',
    answer: 'Un vecteur non nul perpendiculaire à la droite. Si la droite a pour équation ax + by + c = 0, alors un vecteur normal est (a, b).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-44',
    question: 'Comment calcule-t-on les coordonnées du milieu d\'un segment?',
    answer: 'Si A(x₁, y₁) et B(x₂, y₂), alors le milieu M a pour coordonnées M((x₁+x₂)/2, (y₁+y₂)/2).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-45',
    question: 'Quelle est la formule de la médiane d\'une série statistique?',
    answer: 'La valeur qui partage la série ordonnée en deux parties de même effectif.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-46',
    question: 'Comment calcule-t-on la moyenne d\'une série statistique?',
    answer: 'x̄ = (Σ x_i×n_i)/N, où n_i est l\'effectif de la valeur x_i et N l\'effectif total.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-47',
    question: 'Qu\'est-ce que la variance d\'une série statistique?',
    answer: 'V = (Σ (x_i - x̄)²×n_i)/N, où x̄ est la moyenne de la série.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-48',
    question: 'Qu\'est-ce que l\'écart-type d\'une série statistique?',
    answer: 'σ = √V, où V est la variance de la série.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-49',
    question: 'Qu\'est-ce qu\'un quartile dans une série statistique?',
    answer: 'Les quartiles divisent la série ordonnée en quatre parties égales: Q1 (25%), Q2 (médiane, 50%), Q3 (75%).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-50',
    question: 'Qu\'est-ce que l\'écart interquartile?',
    answer: 'C\'est la différence entre le troisième et le premier quartile: Q3 - Q1.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-51',
    question: 'Qu\'appelle-t-on fonction paire?',
    answer: 'Une fonction f telle que pour tout x dans son domaine de définition, f(-x) = f(x).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-52',
    question: 'Qu\'appelle-t-on fonction impaire?',
    answer: 'Une fonction f telle que pour tout x dans son domaine de définition, f(-x) = -f(x).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-53',
    question: 'Quelle est la définition de la composition de deux fonctions?',
    answer: '(f∘g)(x) = f(g(x)), c\'est-à-dire qu\'on applique d\'abord g puis f.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-54',
    question: 'Qu\'est-ce qu\'une fonction bijective?',
    answer: 'Une fonction qui est à la fois injective (deux éléments distincts ont des images distinctes) et surjective (tout élément de l\'ensemble d\'arrivée est image d\'au moins un élément de l\'ensemble de départ).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-55',
    question: 'Qu\'est-ce que la fonction réciproque d\'une fonction bijective?',
    answer: 'Si f est une bijection de A vers B, alors f⁻¹ est la fonction qui à tout y de B associe l\'unique x de A tel que f(x) = y.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-56',
    question: 'Comment trouver les asymptotes verticales d\'une fonction?',
    answer: 'Chercher les valeurs de x pour lesquelles la fonction n\'est pas définie mais tend vers l\'infini quand on s\'en approche.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-57',
    question: 'Comment trouver les asymptotes horizontales d\'une fonction?',
    answer: 'Calculer les limites de la fonction quand x tend vers +∞ et -∞. Si une limite est finie, la droite y = cette limite est une asymptote horizontale.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-58',
    question: 'Qu\'est-ce que la formule du binôme de Newton?',
    answer: '(a + b)^n = Σ_{k=0}^{n} C_n^k a^{n-k} b^k où C_n^k sont les coefficients binomiaux.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-59',
    question: 'Comment calcule-t-on un coefficient binomial C_n^k?',
    answer: 'C_n^k = n!/(k!(n-k)!) où n! désigne la factorielle de n.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-60',
    question: 'Qu\'est-ce que le triangle de Pascal?',
    answer: 'Une disposition triangulaire des coefficients binomiaux C_n^k, où chaque nombre est la somme des deux nombres situés au-dessus.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-61',
    question: 'Quelles sont les coordonnées d\'un vecteur AB?',
    answer: 'Si A(x_A, y_A) et B(x_B, y_B), alors les coordonnées du vecteur AB sont (x_B - x_A, y_B - y_A).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-62',
    question: 'Comment calcule-t-on la norme d\'un vecteur?',
    answer: 'Si v⃗ = (x, y), alors ||v⃗|| = √(x² + y²).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-63',
    question: 'Quelle est la relation entre les vecteurs directeurs de deux droites perpendiculaires?',
    answer: 'Si u⃗ = (a, b) est un vecteur directeur d\'une droite, alors v⃗ = (-b, a) ou (b, -a) est un vecteur directeur de toute droite perpendiculaire.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-64',
    question: 'Qu\'est-ce qu\'un repère orthonormé?',
    answer: 'Un repère dont les vecteurs de base sont orthogonaux et de norme 1.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-65',
    question: 'Qu\'est-ce qu\'une isométrie?',
    answer: 'Une transformation géométrique qui conserve les distances entre les points.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-66',
    question: 'Qu\'est-ce qu\'une symétrie centrale?',
    answer: 'Une transformation qui à tout point M associe le point M\' tel que O est le milieu de [MM\'], où O est le centre de symétrie.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-67',
    question: 'Qu\'est-ce qu\'une symétrie axiale?',
    answer: 'Une transformation qui à tout point M associe le point M\' tel que l\'axe de symétrie est la médiatrice du segment [MM\'].',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-68',
    question: 'Qu\'est-ce qu\'une translation?',
    answer: 'Une transformation qui déplace tous les points d\'une même distance dans une même direction.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-69',
    question: 'Qu\'est-ce qu\'une rotation?',
    answer: 'Une transformation qui fait tourner tous les points autour d\'un point fixe (le centre de rotation) d\'un même angle.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-70',
    question: 'Qu\'est-ce qu\'un polynôme du second degré?',
    answer: 'Une expression de la forme P(x) = ax² + bx + c où a ≠ 0.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-71',
    question: 'Qu\'est-ce que la factorisation d\'un polynôme?',
    answer: 'Écrire le polynôme sous la forme d\'un produit de facteurs irréductibles.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-72',
    question: 'Comment factoriser un polynôme du second degré?',
    answer: 'Si ax² + bx + c = 0 a pour solutions r₁ et r₂, alors ax² + bx + c = a(x - r₁)(x - r₂).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-73',
    question: 'Qu\'est-ce qu\'une identité remarquable?',
    answer: 'Une formule algébrique qui permet de développer ou factoriser certaines expressions. Par exemple: (a+b)² = a² + 2ab + b².',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-74',
    question: 'Quelles sont les trois identités remarquables principales?',
    answer: '(a+b)² = a² + 2ab + b², (a-b)² = a² - 2ab + b², (a+b)(a-b) = a² - b².',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-75',
    question: 'Qu\'est-ce que le théorème de Thalès?',
    answer: 'Si deux droites sont coupées par des parallèles, alors les rapports des longueurs des segments déterminés sont égaux.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-76',
    question: 'Qu\'est-ce que le théorème de Pythagore?',
    answer: 'Dans un triangle rectangle, le carré de la longueur de l\'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-77',
    question: 'Qu\'est-ce que la réciproque du théorème de Pythagore?',
    answer: 'Si dans un triangle, le carré de la longueur d\'un côté est égal à la somme des carrés des longueurs des deux autres côtés, alors ce triangle est rectangle.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-78',
    question: 'Quelle est la formule des probabilités conditionnelles?',
    answer: 'P(A|B) = P(A∩B)/P(B) où P(B) ≠ 0',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-79',
    question: 'Qu\'est-ce que la formule de Bayes?',
    answer: 'P(A|B) = [P(B|A) × P(A)] / P(B)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-80',
    question: 'Qu\'est-ce qu\'une loi de probabilité?',
    answer: 'Une fonction qui associe à chaque valeur possible d\'une variable aléatoire sa probabilité d\'apparition.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-81',
    question: 'Qu\'est-ce qu\'une loi binomiale?',
    answer: 'La loi de probabilité du nombre de succès dans n épreuves de Bernoulli indépendantes, chacune ayant la même probabilité p de succès.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-82',
    question: 'Comment calcule-t-on P(X = k) pour une variable aléatoire X suivant une loi binomiale B(n,p)?',
    answer: 'P(X = k) = C_n^k × p^k × (1-p)^(n-k)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-83',
    question: 'Quelle est l\'espérance d\'une variable aléatoire suivant une loi binomiale B(n,p)?',
    answer: 'E(X) = n×p',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-84',
    question: 'Quelle est la variance d\'une variable aléatoire suivant une loi binomiale B(n,p)?',
    answer: 'V(X) = n×p×(1-p)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-85',
    question: 'Qu\'est-ce qu\'une densité de probabilité?',
    answer: 'Une fonction positive dont l\'intégrale sur tout l\'espace des valeurs possibles vaut 1, utilisée pour calculer des probabilités pour des variables aléatoires continues.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-86',
    question: 'Qu\'est-ce que la fonction logistique?',
    answer: 'Une fonction de la forme f(x) = L/(1 + e^(-k(x-x₀))) où L, k, x₀ sont des constantes, utilisée pour modéliser la croissance limitée.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-87',
    question: 'Comment définit-on l\'équation d\'un cercle de centre O(a,b) et de rayon r?',
    answer: '(x-a)² + (y-b)² = r²',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-88',
    question: 'Qu\'est-ce qu\'une conique?',
    answer: 'Une courbe obtenue par l\'intersection d\'un cône avec un plan. Les principales coniques sont le cercle, l\'ellipse, la parabole et l\'hyperbole.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-89',
    question: 'Quelle est l\'équation réduite d\'une parabole d\'axe vertical?',
    answer: 'y = ax² + bx + c, ou sous forme canonique: y = a(x-h)² + k où (h,k) sont les coordonnées du sommet.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-90',
    question: 'Quelle est la définition d\'une matrice?',
    answer: 'Un tableau rectangulaire de nombres disposés en lignes et colonnes, utilisé notamment pour représenter des systèmes d\'équations ou des transformations.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-91',
    question: 'Qu\'est-ce qu\'une fonction exponentielle?',
    answer: 'La fonction f définie sur ℝ par f(x) = e^x, où e est le nombre d\'Euler (≈ 2,718...).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-92',
    question: 'Quelles sont les propriétés de la fonction logarithme népérien?',
    answer: 'Définie sur ]0,+∞[, strictement croissante, dérivable avec ln\'(x) = 1/x, et vérifie ln(ab) = ln(a) + ln(b).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-93',
    question: 'Quelle est la définition du logarithme népérien?',
    answer: 'Pour tout réel x > 0, ln(x) est l\'unique réel tel que e^(ln(x)) = x.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-94',
    question: 'Quelles sont les formules de trigonométrie pour la somme d\'angles?',
    answer: 'cos(a+b) = cos(a)cos(b) - sin(a)sin(b) et sin(a+b) = sin(a)cos(b) + cos(a)sin(b)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-95',
    question: 'Quelle est la relation fondamentale de la trigonométrie?',
    answer: 'cos²(x) + sin²(x) = 1',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-96',
    question: 'Qu\'est-ce que la formule de duplication en trigonométrie?',
    answer: 'cos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1 = 1 - 2sin²(x) et sin(2x) = 2sin(x)cos(x)',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-97',
    question: 'Qu\'est-ce que la continuité d\'une fonction en un point?',
    answer: 'Une fonction f est continue en a si limₓ→ₐ f(x) = f(a).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-98',
    question: 'Qu\'est-ce que le théorème des valeurs intermédiaires?',
    answer: 'Si f est continue sur [a,b] et si f(a) et f(b) sont de signes opposés, alors il existe au moins un réel c dans ]a,b[ tel que f(c) = 0.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-99',
    question: 'Qu\'est-ce que la représentation paramétrique d\'une courbe?',
    answer: 'Description d\'une courbe par les coordonnées (x,y) exprimées en fonction d\'un paramètre t: x = f(t) et y = g(t).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-100',
    question: 'Qu\'est-ce qu\'une équation différentielle du premier ordre?',
    answer: 'Une équation de la forme y\' = f(x,y) où y\' représente la dérivée de y par rapport à x.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-101',
    question: 'Quelles conditions une fonction f doit-elle remplir pour être dérivable en un point a?',
    answer: 'La fonction doit être continue en a et le taux d\'accroissement [f(a+h)-f(a)]/h doit avoir une limite finie quand h tend vers 0.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-102',
    question: 'Quel est le lien entre la dérivabilité et la continuité d\'une fonction?',
    answer: 'Si une fonction est dérivable en un point, alors elle est continue en ce point (la réciproque est fausse).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-103',
    question: 'Comment définit-on la tangente au graphe d\'une fonction en un point?',
    answer: 'C\'est la droite passant par le point et dont le coefficient directeur est égal à la dérivée de la fonction en ce point.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-104',
    question: 'Quelle est la relation entre le signe de la dérivée seconde et la concavité de la courbe?',
    answer: 'Si f\"(x) > 0 sur un intervalle, la courbe est convexe (tournée vers le haut); si f\"(x) < 0, elle est concave (tournée vers le bas).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-105',
    question: 'Comment définit-on un point d\'inflexion?',
    answer: 'C\'est un point où la courbe change de concavité, c\'est-à-dire où la dérivée seconde change de signe.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-106',
    question: 'Qu\'est-ce qu\'une fonction strictement monotone?',
    answer: 'Une fonction strictement croissante (si x₁ < x₂ alors f(x₁) < f(x₂)) ou strictement décroissante (si x₁ < x₂ alors f(x₁) > f(x₂)).',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-107',
    question: 'Que signifie graphiquement le fait qu\'une fonction soit croissante?',
    answer: 'La courbe représentative "monte" de gauche à droite.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-108',
    question: 'Qu\'est-ce qu\'un extremum local?',
    answer: 'Un maximum local ou un minimum local de la fonction, c\'est-à-dire un point où la fonction atteint une valeur plus grande ou plus petite que dans son voisinage immédiat.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-109',
    question: 'Qu\'est-ce qu\'un théorème de point fixe?',
    answer: 'Un théorème garantissant l\'existence d\'un point x tel que f(x) = x sous certaines conditions sur la fonction f.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-prem-110',
    question: 'Qu\'est-ce qu\'une fonction périodique?',
    answer: 'Une fonction f telle qu\'il existe un nombre réel T > 0 tel que pour tout x du domaine de définition, f(x + T) = f(x). T est appelé période de f.',
    matiere: 'Mathématiques',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  }
];

// 110 flashcards pour le programme de mathématiques de terminale
const mathTerminaleFlashcards: Flashcard[] = [
  {
    id: 'math-term-1',
    question: 'Qu\'est-ce qu\'une limite de fonction?',
    answer: 'La valeur vers laquelle tend une fonction f(x) lorsque x s\'approche d\'une valeur donnée ou de l\'infini.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-2',
    question: 'Comment définit-on la continuité d\'une fonction en un point?',
    answer: 'Une fonction f est continue en un point a si la limite de f(x) quand x tend vers a est égale à f(a).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-3',
    question: 'Qu\'est-ce que le théorème des valeurs intermédiaires?',
    answer: 'Si f est continue sur [a,b] et si f(a)×f(b) < 0, alors il existe au moins un réel c dans ]a,b[ tel que f(c) = 0.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-4',
    question: 'Qu\'est-ce que la dérivée d\'une fonction?',
    answer: 'La limite du taux de variation de la fonction quand l\'accroissement tend vers zéro: f\'(a) = lim(h→0) [f(a+h)-f(a)]/h',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-5',
    question: 'Qu\'est-ce que la dérivée seconde d\'une fonction?',
    answer: 'La dérivée de la dérivée première: f\"(x) = (f\'(x))\'',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-6',
    question: 'Qu\'est-ce que la notion de primitive d\'une fonction?',
    answer: 'Une fonction F est une primitive de f sur un intervalle I si pour tout x dans I, F\'(x) = f(x).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-7',
    question: 'Qu\'est-ce que l\'intégrale d\'une fonction continue sur un intervalle [a,b]?',
    answer: 'Si f est continue sur [a,b] et si F est une primitive de f sur [a,b], alors ∫_a^b f(x)dx = F(b) - F(a).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-8',
    question: 'Quelle est l\'interprétation géométrique de l\'intégrale?',
    answer: 'L\'intégrale ∫_a^b f(x)dx représente l\'aire algébrique de la surface délimitée par la courbe représentative de f, l\'axe des abscisses et les droites d\'équations x = a et x = b.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-9',
    question: 'Quelle est la formule d\'intégration par parties?',
    answer: '∫_a^b u(x)v\'(x)dx = [u(x)v(x)]_a^b - ∫_a^b u\'(x)v(x)dx',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-10',
    question: 'Qu\'est-ce qu\'une équation différentielle linéaire du premier ordre?',
    answer: 'Une équation de la forme y\' + a(x)y = b(x) où a et b sont des fonctions continues.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-11',
    question: 'Comment résout-on une équation différentielle de la forme y\' = ay?',
    answer: 'La solution générale est y(x) = Ce^(ax) où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-12',
    question: 'Qu\'est-ce qu\'une équation différentielle linéaire du second ordre à coefficients constants?',
    answer: 'Une équation de la forme y\" + ay\' + by = f(x) où a et b sont des constantes réelles.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-13',
    question: 'Qu\'est-ce qu\'une équation caractéristique?',
    answer: 'Pour l\'équation différentielle y\" + ay\' + by = 0, l\'équation caractéristique est r² + ar + b = 0.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-14',
    question: 'Qu\'est-ce qu\'une loi binomiale?',
    answer: 'La loi de probabilité de la variable aléatoire X qui compte le nombre de succès dans n épreuves de Bernoulli indépendantes avec une probabilité p de succès à chaque épreuve.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-15',
    question: 'Quelle est la formule de la probabilité P(X = k) pour une variable aléatoire X suivant une loi binomiale B(n,p)?',
    answer: 'P(X = k) = C_n^k × p^k × (1-p)^(n-k)',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-16',
    question: 'Qu\'est-ce que l\'espérance d\'une variable aléatoire?',
    answer: 'La moyenne pondérée de toutes les valeurs possibles de la variable aléatoire, où les poids sont les probabilités associées.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-17',
    question: 'Quelle est l\'espérance d\'une variable aléatoire X suivant une loi binomiale B(n,p)?',
    answer: 'E(X) = n×p',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-18',
    question: 'Quelle est la variance d\'une variable aléatoire X suivant une loi binomiale B(n,p)?',
    answer: 'V(X) = n×p×(1-p)',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-19',
    question: 'Qu\'est-ce que la loi normale centrée réduite?',
    answer: 'La loi normale de moyenne 0 et d\'écart-type 1, notée N(0,1).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-20',
    question: 'Quelle est la densité de probabilité de la loi normale centrée réduite?',
    answer: 'f(x) = (1/√(2π)) × e^(-x²/2)',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-21',
    question: 'Quelle est la relation entre une loi normale quelconque N(μ,σ²) et la loi normale centrée réduite N(0,1)?',
    answer: 'Si X suit la loi N(μ,σ²), alors Z = (X-μ)/σ suit la loi N(0,1).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-22',
    question: 'Qu\'est-ce que l\'intervalle de fluctuation?',
    answer: 'Un intervalle contenant la fréquence observée avec une probabilité donnée (généralement 0,95).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-23',
    question: 'Qu\'est-ce qu\'un intervalle de confiance pour une proportion?',
    answer: 'Un intervalle qui contient la proportion p inconnue dans la population avec un niveau de confiance donné.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-24',
    question: 'Comment approximer une loi binomiale par une loi normale?',
    answer: 'Pour n grand et p ni trop proche de 0 ni trop proche de 1, B(n,p) peut être approximée par N(np, np(1-p)).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-25',
    question: 'Qu\'est-ce qu\'un vecteur dans l\'espace?',
    answer: 'Un triplet de nombres réels (x,y,z) représentant une translation dans l\'espace.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-26',
    question: 'Comment calcule-t-on la norme d\'un vecteur de l\'espace?',
    answer: 'Si v⃗ = (x,y,z), alors ||v⃗|| = √(x² + y² + z²).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-27',
    question: 'Qu\'est-ce que le produit scalaire de deux vecteurs de l\'espace?',
    answer: 'Si u⃗ = (x₁,y₁,z₁) et v⃗ = (x₂,y₂,z₂), alors u⃗·v⃗ = x₁x₂ + y₁y₂ + z₁z₂.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-28',
    question: 'Qu\'est-ce que le produit vectoriel de deux vecteurs de l\'espace?',
    answer: 'Si u⃗ = (x₁,y₁,z₁) et v⃗ = (x₂,y₂,z₂), alors u⃗×v⃗ = (y₁z₂-z₁y₂, z₁x₂-x₁z₂, x₁y₂-y₁x₂).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-29',
    question: 'Quelles sont les propriétés géométriques du produit vectoriel?',
    answer: 'Il est perpendiculaire aux deux vecteurs initiaux, et sa norme est égale au produit des normes des deux vecteurs initiaux multiplié par le sinus de l\'angle entre eux.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-30',
    question: 'Qu\'est-ce qu\'une droite dans l\'espace?',
    answer: 'Ensemble des points M tels que OM⃗ = OA⃗ + t·v⃗, où A est un point de la droite, v⃗ un vecteur directeur et t un réel.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-31',
    question: 'Qu\'est-ce qu\'un plan dans l\'espace?',
    answer: 'Ensemble des points M tels que OM⃗ = OA⃗ + t·u⃗ + s·v⃗, où A est un point du plan, u⃗ et v⃗ sont deux vecteurs non colinéaires, et t et s sont des réels.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-32',
    question: 'Quelle est l\'équation cartésienne d\'un plan?',
    answer: 'Un plan peut s\'écrire sous la forme ax + by + cz + d = 0, où (a,b,c) sont les coordonnées d\'un vecteur normal au plan.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-33',
    question: 'Comment déterminer si deux droites de l\'espace sont parallèles?',
    answer: 'Deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-34',
    question: 'Comment déterminer si deux plans sont parallèles?',
    answer: 'Deux plans sont parallèles si et seulement si leurs vecteurs normaux sont colinéaires.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-35',
    question: 'Qu\'est-ce qu\'un nombre complexe?',
    answer: 'Un nombre de la forme z = a + ib, où a et b sont des nombres réels et i est tel que i² = -1.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-36',
    question: 'Quelle est la définition de la partie réelle et de la partie imaginaire d\'un nombre complexe?',
    answer: 'Pour z = a + ib, Re(z) = a est la partie réelle et Im(z) = b est la partie imaginaire.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-37',
    question: 'Quelle est la définition du module d\'un nombre complexe?',
    answer: 'Pour z = a + ib, le module |z| = √(a² + b²).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-38',
    question: 'Quelle est la définition de l\'argument d\'un nombre complexe non nul?',
    answer: 'Pour z = a + ib ≠ 0, l\'argument arg(z) est l\'angle θ ∈ ]-π, π] tel que z = |z|(cos θ + i sin θ).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-39',
    question: 'Quelle est la forme trigonométrique d\'un nombre complexe?',
    answer: 'z = |z|(cos θ + i sin θ) où |z| est le module et θ est l\'argument de z.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-40',
    question: 'Quelle est la formule d\'Euler?',
    answer: 'e^(iθ) = cos θ + i sin θ',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-41',
    question: 'Quelle est la forme exponentielle d\'un nombre complexe?',
    answer: 'z = |z|e^(iθ) où |z| est le module et θ est l\'argument de z.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-42',
    question: 'Comment effectue-t-on le produit de deux nombres complexes sous forme exponentielle?',
    answer: 'Si z₁ = |z₁|e^(iθ₁) et z₂ = |z₂|e^(iθ₂), alors z₁z₂ = |z₁||z₂|e^(i(θ₁+θ₂)).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-43',
    question: 'Comment effectue-t-on le quotient de deux nombres complexes sous forme exponentielle?',
    answer: 'Si z₁ = |z₁|e^(iθ₁) et z₂ = |z₂|e^(iθ₂) avec z₂ ≠ 0, alors z₁/z₂ = (|z₁|/|z₂|)e^(i(θ₁-θ₂)).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-44',
    question: 'Quelle est la formule de Moivre?',
    answer: '(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ) ou de façon équivalente (e^(iθ))^n = e^(inθ)',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-45',
    question: 'Comment résout-on une équation du second degré à coefficients complexes?',
    answer: 'On applique la même formule que pour les équations à coefficients réels, en utilisant le discriminant complexe.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-46',
    question: 'Qu\'est-ce qu\'une suite de nombres réels?',
    answer: 'Une fonction qui à tout entier naturel n associe un nombre réel u_n.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-47',
    question: 'Qu\'est-ce qu\'une suite convergente?',
    answer: 'Une suite (u_n) qui admet une limite finie l quand n tend vers l\'infini, c\'est-à-dire que u_n peut être rendu aussi proche de l qu\'on veut en prenant n suffisamment grand.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-48',
    question: 'Qu\'est-ce qu\'une suite divergente?',
    answer: 'Une suite qui n\'est pas convergente.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-49',
    question: 'Qu\'est-ce qu\'une suite croissante?',
    answer: 'Une suite (u_n) telle que pour tout n, u_n+1 ≥ u_n.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-50',
    question: 'Qu\'est-ce qu\'une suite décroissante?',
    answer: 'Une suite (u_n) telle que pour tout n, u_n+1 ≤ u_n.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-51',
    question: 'Qu\'est-ce qu\'une suite arithmétique?',
    answer: 'Une suite (u_n) telle que pour tout n, u_n+1 - u_n = r, où r est la raison de la suite.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-52',
    question: 'Quelle est l\'expression du terme général d\'une suite arithmétique?',
    answer: 'u_n = u_0 + nr où u_0 est le premier terme et r la raison.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-53',
    question: 'Qu\'est-ce qu\'une suite géométrique?',
    answer: 'Une suite (u_n) telle que pour tout n, u_n+1/u_n = q (avec u_n ≠ 0), où q est la raison de la suite.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-54',
    question: 'Quelle est l\'expression du terme général d\'une suite géométrique?',
    answer: 'u_n = u_0 × q^n où u_0 est le premier terme et q la raison.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-55',
    question: 'Quelle est la somme des n premiers termes d\'une suite arithmétique?',
    answer: 'S_n = n(u_1 + u_n)/2 = n(2u_1 + (n-1)r)/2 où u_1 est le premier terme et r la raison.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-56',
    question: 'Quelle est la somme des n premiers termes d\'une suite géométrique de raison q ≠ 1?',
    answer: 'S_n = u_1(1-q^n)/(1-q) où u_1 est le premier terme.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-57',
    question: 'Quand une suite géométrique de raison q est-elle convergente?',
    answer: 'Une suite géométrique est convergente si et seulement si |q| < 1, et dans ce cas elle converge vers 0.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-58',
    question: 'Qu\'est-ce qu\'une suite définie par récurrence?',
    answer: 'Une suite où chaque terme est défini en fonction des termes précédents, avec une valeur initiale donnée.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-59',
    question: 'Qu\'est-ce que le théorème de la convergence monotone?',
    answer: 'Toute suite croissante et majorée converge. Toute suite décroissante et minorée converge.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-60',
    question: 'Quelle est la limite de la suite (q^n) lorsque n tend vers l\'infini pour |q| < 1?',
    answer: 'La limite est 0.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-61',
    question: 'Quelle est la limite de la suite (n^(1/n)) lorsque n tend vers l\'infini?',
    answer: 'La limite est 1.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-62',
    question: 'Qu\'est-ce qu\'une fonction continue sur un intervalle?',
    answer: 'Une fonction est continue sur un intervalle I si elle est continue en chaque point de I.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-63',
    question: 'Qu\'est-ce que le théorème des valeurs intermédiaires?',
    answer: 'Si f est une fonction continue sur [a,b] et si y est compris entre f(a) et f(b), alors il existe c dans [a,b] tel que f(c) = y.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-64',
    question: 'Qu\'est-ce que le théorème de la bijection?',
    answer: 'Si f est continue et strictement monotone sur [a,b], alors f réalise une bijection de [a,b] sur [f(a),f(b)] ou [f(b),f(a)].',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-65',
    question: 'Quelle est la définition de la dérivabilité d\'une fonction en un point?',
    answer: 'Une fonction f est dérivable en a si le taux d\'accroissement [f(a+h)-f(a)]/h admet une limite finie quand h tend vers 0. Cette limite est la dérivée de f en a, notée f\'(a).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-66',
    question: 'Qu\'est-ce que le théorème de Rolle?',
    answer: 'Si f est continue sur [a,b], dérivable sur ]a,b[ et si f(a) = f(b), alors il existe c dans ]a,b[ tel que f\'(c) = 0.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-67',
    question: 'Qu\'est-ce que le théorème des accroissements finis?',
    answer: 'Si f est continue sur [a,b] et dérivable sur ]a,b[, alors il existe c dans ]a,b[ tel que f(b)-f(a) = (b-a)f\'(c).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-68',
    question: 'Qu\'est-ce qu\'une fonction convexe?',
    answer: 'Une fonction f est convexe sur un intervalle I si pour tout x,y de I et pour tout t dans [0,1], f(tx + (1-t)y) ≤ tf(x) + (1-t)f(y).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-69',
    question: 'Comment caractérise-t-on la convexité d\'une fonction dérivable?',
    answer: 'Une fonction dérivable f est convexe sur un intervalle I si et seulement si sa dérivée f\' est croissante sur I.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-70',
    question: 'Comment caractérise-t-on la convexité d\'une fonction deux fois dérivable?',
    answer: 'Une fonction deux fois dérivable f est convexe sur un intervalle I si et seulement si sa dérivée seconde f\" est positive ou nulle sur I.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-71',
    question: 'Qu\'est-ce qu\'une primitive d\'une fonction?',
    answer: 'Une fonction F est une primitive de f sur un intervalle I si pour tout x de I, F\'(x) = f(x).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-72',
    question: 'Comment trouve-t-on l\'ensemble des primitives d\'une fonction continue sur un intervalle?',
    answer: 'Si F est une primitive de f sur un intervalle I, alors l\'ensemble des primitives de f sur I est {F + C | C ∈ ℝ}.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-73',
    question: 'Quelle est la primitive de la fonction constante f(x) = k?',
    answer: 'F(x) = kx + C où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-74',
    question: 'Quelle est la primitive de la fonction f(x) = x^n (n ≠ -1)?',
    answer: 'F(x) = x^(n+1)/(n+1) + C où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-75',
    question: 'Quelle est la primitive de la fonction f(x) = 1/x?',
    answer: 'F(x) = ln|x| + C où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-76',
    question: 'Quelle est la primitive de la fonction f(x) = e^x?',
    answer: 'F(x) = e^x + C où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-77',
    question: 'Quelle est la primitive de la fonction f(x) = cos(x)?',
    answer: 'F(x) = sin(x) + C où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-78',
    question: 'Quelle est la primitive de la fonction f(x) = sin(x)?',
    answer: 'F(x) = -cos(x) + C où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-79',
    question: 'Qu\'est-ce que l\'intégrale d\'une fonction continue sur un intervalle [a,b]?',
    answer: 'Si f est continue sur [a,b] et si F est une primitive de f sur [a,b], alors l\'intégrale de f sur [a,b] est ∫_a^b f(x)dx = F(b) - F(a).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-80',
    question: 'Quelles sont les propriétés de linéarité de l\'intégrale?',
    answer: '∫_a^b (αf(x) + βg(x))dx = α∫_a^b f(x)dx + β∫_a^b g(x)dx pour tous réels α et β.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-81',
    question: 'Quelle est la relation entre l\'intégrale de f sur [a,b] et sur [b,a]?',
    answer: '∫_a^b f(x)dx = -∫_b^a f(x)dx',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-82',
    question: 'Quelle est la relation d\'additivité de l\'intégrale par rapport à l\'intervalle?',
    answer: 'Pour tout c entre a et b, ∫_a^b f(x)dx = ∫_a^c f(x)dx + ∫_c^b f(x)dx',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-83',
    question: 'Qu\'est-ce que la positivité de l\'intégrale?',
    answer: 'Si pour tout x de [a,b], f(x) ≥ 0, alors ∫_a^b f(x)dx ≥ 0.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-84',
    question: 'Qu\'est-ce que la relation de comparaison pour les intégrales?',
    answer: 'Si pour tout x de [a,b], f(x) ≤ g(x), alors ∫_a^b f(x)dx ≤ ∫_a^b g(x)dx.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-85',
    question: 'Quelle est l\'inégalité de la moyenne pour les intégrales?',
    answer: 'Si m ≤ f(x) ≤ M pour tout x de [a,b], alors m(b-a) ≤ ∫_a^b f(x)dx ≤ M(b-a).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-86',
    question: 'Qu\'est-ce que l\'intégration par parties?',
    answer: 'C\'est une technique pour calculer des intégrales de la forme ∫u(x)v\'(x)dx = [u(x)v(x)] - ∫u\'(x)v(x)dx.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-87',
    question: 'Qu\'est-ce que le changement de variable dans une intégrale?',
    answer: 'Si f est continue sur [a,b], si φ est une bijection de classe C¹ de [α,β] sur [a,b], alors ∫_a^b f(x)dx = ∫_α^β f(φ(t))φ\'(t)dt.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-88',
    question: 'Quelle est l\'intégrale de la fonction f(x) = 1/(1+x²)?',
    answer: '∫1/(1+x²)dx = arctan(x) + C où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-89',
    question: 'Quelle est l\'intégrale de la fonction f(x) = 1/√(1-x²) pour |x| < 1?',
    answer: '∫1/√(1-x²)dx = arcsin(x) + C où C est une constante réelle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-90',
    question: 'Qu\'est-ce qu\'une matrice carrée d\'ordre n?',
    answer: 'Un tableau carré de n lignes et n colonnes contenant des nombres.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-91',
    question: 'Comment additionne-t-on deux matrices de même taille?',
    answer: 'En additionnant les éléments correspondants.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-92',
    question: 'Comment multiplie-t-on une matrice par un scalaire?',
    answer: 'En multipliant chaque élément de la matrice par ce scalaire.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-93',
    question: 'Comment multiplie-t-on deux matrices A et B?',
    answer: 'Si A est de taille m×n et B de taille n×p, alors le produit AB est de taille m×p, avec (AB)_ij = Σ_(k=1)^n A_ik × B_kj.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-94',
    question: 'Qu\'est-ce que la matrice identité d\'ordre n?',
    answer: 'La matrice carrée I_n ayant des 1 sur la diagonale principale et des 0 partout ailleurs.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-95',
    question: 'Qu\'est-ce qu\'une matrice inversible?',
    answer: 'Une matrice carrée A pour laquelle il existe une matrice B telle que AB = BA = I.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-96',
    question: 'Qu\'est-ce que le déterminant d\'une matrice carrée?',
    answer: 'Un nombre associé à la matrice, qui est nul si et seulement si la matrice n\'est pas inversible.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-97',
    question: 'Quelle est la formule du déterminant d\'une matrice 2×2?',
    answer: 'Si A = [[a,b],[c,d]], alors det(A) = ad - bc.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-98',
    question: 'Qu\'est-ce que la trace d\'une matrice carrée?',
    answer: 'La somme des éléments de la diagonale principale: Tr(A) = Σ_(i=1)^n A_ii.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-99',
    question: 'Qu\'est-ce qu\'une matrice diagonale?',
    answer: 'Une matrice carrée dont tous les éléments en dehors de la diagonale principale sont nuls.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-100',
    question: 'Qu\'est-ce qu\'une matrice symétrique?',
    answer: 'Une matrice carrée A telle que A = A^T, où A^T est la transposée de A.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-101',
    question: 'Qu\'est-ce qu\'une fonction convexe?',
    answer: 'Une fonction f est convexe si, pour tous x, y et pour tout t ∈ [0,1], on a f(tx + (1-t)y) ≤ tf(x) + (1-t)f(y).',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-102',
    question: 'Qu\'est-ce qu\'une fonction concave?',
    answer: 'Une fonction f est concave si -f est convexe.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-103',
    question: 'Qu\'est-ce qu\'un vecteur propre d\'une matrice?',
    answer: 'Un vecteur non nul v tel qu\'il existe un scalaire λ vérifiant Av = λv.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-104',
    question: 'Qu\'est-ce qu\'une valeur propre d\'une matrice?',
    answer: 'Un scalaire λ tel qu\'il existe un vecteur non nul v vérifiant Av = λv.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-105',
    question: 'Qu\'est-ce qu\'une application linéaire?',
    answer: 'Une fonction f entre deux espaces vectoriels telle que f(αu + βv) = αf(u) + βf(v) pour tous vecteurs u, v et scalaires α, β.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-106',
    question: 'Qu\'est-ce qu\'un système différentiel linéaire du premier ordre?',
    answer: 'Un système d\'équations de la forme X\'(t) = AX(t) + B(t) où A est une matrice constante et B une fonction vectorielle.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-107',
    question: 'Quelle est la densité de la loi normale centrée réduite?',
    answer: 'f(x) = (1/√(2π)) × e^(-x²/2)',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-108',
    question: 'Quelle est la propriété de symétrie de la loi normale centrée réduite?',
    answer: 'La fonction de densité f vérifie f(-x) = f(x) pour tout réel x.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-109',
    question: 'Comment définit-on l\'écart-type d\'une variable aléatoire?',
    answer: 'σ(X) = √V(X) où V(X) est la variance de X.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: 'math-term-110',
    question: 'Comment calcule-t-on la médiane d\'une variable aléatoire continue?',
    answer: 'La médiane m est telle que P(X ≤ m) = 1/2.',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  }
];

// Exporter les flashcards de mathématiques
export const mathFlashcards = [...mathPremiereFlashcards, ...mathTerminaleFlashcards];
