
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const histoireQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Quelles sont les trois principales idées défendues par les philosophes des Lumières au XVIIIe siècle ?",
    answer: "La raison, la liberté et le progrès",
    explication: "Les philosophes des Lumières comme Voltaire, Rousseau et Montesquieu défendaient l'usage de la raison contre les préjugés et superstitions, la liberté contre l'absolutisme, et croyaient au progrès de l'humanité par la connaissance.",
    niveau: "quatrieme",
    matiere: "Histoire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelles sont les principales causes de la Révolution française de 1789 ?",
    answer: "La crise financière du royaume, les inégalités sociales, l'influence des idées des Lumières",
    explication: "La Révolution française résulte d'une conjonction de facteurs : une grave crise financière aggravée par l'aide aux insurgés américains, une société d'ordres inégalitaire (avec ses privilèges pour la noblesse et le clergé), et la diffusion des idées des Lumières remettant en cause l'absolutisme.",
    niveau: "quatrieme",
    matiere: "Histoire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelles sont les principales conséquences de la révolution industrielle au XIXe siècle ?",
    answer: "L'essor du capitalisme industriel, l'urbanisation, l'émergence de la classe ouvrière, les transformations techniques",
    explication: "La révolution industrielle a entraîné de profonds changements : développement du capitalisme avec les usines, exode rural et croissance des villes, formation d'un prolétariat urbain aux conditions de vie difficiles, innovations techniques (machine à vapeur, métallurgie...).",
    niveau: "quatrieme",
    matiere: "Histoire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que le congrès de Vienne (1814-1815) et quels en furent les principes directeurs ?",
    answer: "Conférence internationale réorganisant l'Europe après Napoléon selon les principes de légitimité dynastique, équilibre des puissances et restauration",
    explication: "Après la défaite de Napoléon, les puissances victorieuses (Autriche, Russie, Prusse, Royaume-Uni) ont réorganisé l'Europe en restaurant les monarchies légitimes et en créant un équilibre entre les puissances pour éviter qu'une seule domine le continent.",
    niveau: "quatrieme",
    matiere: "Histoire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que l'impérialisme colonial européen du XIXe siècle et quelles en étaient les motivations ?",
    answer: "Conquête et domination de territoires par les pays européens, motivées par des raisons économiques, stratégiques, culturelles et de prestige national",
    explication: "L'impérialisme colonial est l'expansion territoriale des puissances européennes (notamment France et Royaume-Uni) qui se partagent de vastes territoires en Afrique et en Asie. Les motivations incluent la recherche de matières premières et débouchés commerciaux, la compétition entre puissances, la mission 'civilisatrice' et le prestige national.",
    niveau: "quatrieme",
    matiere: "Histoire",
    diplome: "brevet"
  }
];
