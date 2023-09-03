const resumeDataFR = {
  profile: {
    name: "Bruna Santos",
    email: "bruna.roberta@ufpe.br",
    phone: "+33 06 56 67 55 35",
    location: "Saint-Ouen-sur-Seine, France",
    github: "https://github.com/gsantosbruna/",
    portfolio: "https://bruna-santos-portfolio.webflow.io/",
    linkedin: "https://www.linkedin.com/in/brunarobertasantos/",
    blog: "https://medium.com/@brunasantos_38597",
    aboutMe:
      "Pendant mes études en génie mécanique, j'ai découvert une passion pour la programmation. Cette passion a grandi en travaillant en tant que software tester et QA engineer. Pour combler mon expérience en génie avec mon intérêt pour l'informatique, j'ai poursuivi un double diplôme en mécatronique et en systèmes complexes. Je recherche maintenant un stage de fin d'études en tant que software engineer pour allier ma créativité à mon souci constant de la qualité en raison de mon expérience en tant que QA.",
  },
  education: [
    {
      school: "Institut Supérieur de Mécanique de Paris (ISAE-Supméca)",
      location: "Paris, France",
      degree: "Diplôme d'ingénieur Bac+5- Mécatronique et Systèmes Complexes",
      date: "Août 2022 - Juillet 2024",
      acquiredKnowledge: [
        "Algorithmes",
        "Deep Learning",
        "Réseaux et Communications",
        "Systèmes Numériques",
        "Architecture Informatique",
      ],
    },
    {
      school: "Universidade Federal de Pernambuco (UFPE)",
      location: "Recife, Brésil",
      degree: "Génie Mécanique",
      date: "Août 2018 - Juillet 2024",
      acquiredKnowledge: [
        "Programmation",
        "Mathématiques",
        "Interface Hardware-Software",
        "Résolution de Problèmes",
        "Innovation Interdisciplinaire",
      ],
    },
  ],
  experience: [
    {
      title: "Chercheuse de Projet - Stage Académique",
      company: "ENERMAN",
      location: "Paris, France",
      date: "Septembre 2022 - Janvier 2023",
      description: [
        "Travaillé chez ENERMAN, un projet de recherche de l'Union Européenne pour développer un framework  de gestion de l'énergie.",
        "Développé un modèle de réseau bayésien pour effectuer une analyse de gestion des risques pour le projet ENERMAN.",
        "Utilisé Python, en particulier les bibliothèques pgmpy et matplotlib, pour construire un modèle bow-tie pour l'analyse des risques.",
      ],
    },
    {
      title: "Ingénieure QA",
      company: "CESAR",
      location: "Recife, Brésil",
      date: "Juillet 2021 - Août 2022",
      description: [
        "Assuré la qualité du produit tout au long du cycle de vie du projet SCRUM.",
        "Conçu et exécuté des plans de test complets englobant à la fois des tests manuels fonctionnels et non fonctionnels.",
        "Automatisé les tests d'UI E2E pour les systèmes Apple (iOS et macOS) en utilisant le langage Swift et la bibliothèque XCTest.",
      ],
    },
    {
      title: "Ingénieure Test Logiciel",
      company: "Motorola (Lenovo)",
      location: "Recife, Brésil",
      date: "Juillet 2020 - Juillet 2021",
      description: [
        "Stage effectué de juillet 2020 à avril 2021, suivi d'un poste à plein temps en tant qu'ingénieure de test d'avril 2021 à juillet 2021.",
        "Conduit des cycles de tests manuels, y compris des tests fonctionnels de régression et exploratoires.",
        "Développé et maintenu des scripts de test automatisés pour Android en utilisant Java via le framework UIAutomator.",
        "A enquêté sur les problèmes, initié des demandes de changement (CR) et effectué des retests suivis via JIRA.",
      ],
    },
  ],

  skills: {
    programmingLanguages: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C",
      "C++",
      "Swift",
      "Matlab",
      "Java",
    ],
    librariesFrameworks: [
      "React",
      "Node.js",
      "Next.js",
      "HTML5",
      "CSS",
      "XCTest",
      "Selenium",
    ],
    toolsPlatforms: ["Git", "Jira", "Jenkins", "Arduino"],
    softSkills: [
      "Résolution de Problèmes",
      "Sensibilité Culturelle",
      "Adaptabilité",
      "Travail d'Équipe",
      "Collaboration",
      "Communication",
    ],
    languages: [
      "Anglais (Courant)",
      "Français (Avancé)",
      "Portugais (Natif)",
      "Espagnol (Intermédiaire)",
    ],
  },
  certifications: [
    "CTFL Foundation Level - ISTQB (International Software Testing Qualifications Board)",
    "TOEIC (990 sur 990) - TOEIC Educational Testing Service (ETS)",
    "CESAR School - Automatisation des Tests, Extension en Informatique. 2021-2022. Apprentissage sur software quality, software development, les méthodologies agile et en cascade, UI/UX et DevOps.",
  ],
  honorsAndAwards: [
    {
      award: `Boursière du Programme BRAFITEC (Septembre 2022 - Présent)`,
      description: `Double diplôme financé par la Coordination Brésilienne pour l'Amélioration du Personnel de l'Enseignement Supérieur (CAPES), qui offre des bourses à étudiantes ayant excellé dans les programmes d'ingénierie brésiliens.`,
    },
  ],
  projects: [
    {
      title: "Pronunciation Checker",
      image: "https://i.imgur.com/9Q9W9X3.png",
      tags: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Google Cloud Speech",
      ],
      githubLink: "https://github.com/gsantosbruna/pronunciation-check",
      liveLink: "https://pronunciation-check.vercel.app/",
      description:
        "Le Pronunciation Checker est une application web conçue pour aider à améliorer la prononciation. Elle utilise Google Cloud Speech pour transcrire les mots prononcés en texte, puis les compare au texte attendu, fournissant des feedbacks.",
    },

    // {
    //   title: "Portfolio",
    //   image: "https://i.imgur.com/8XZJQZM.png",
    //   tags: ["React", "CSS", "HTML5"],
    //   githubLink: "https://github.com/gsantosbruna/portfolio",
    //   liveLink: "https://portfolio-gsantosbruna.vercel.app/",
    //   description:
    //     "Mon site portfolio construit avec React, CSS et HTML5. Il présente mes compétences, projets et expériences.",
    // },
  ],
  common: {
    education: "Éducation",
    experience: "Expérience",
    skills: "Compétences",
    certifications: "Certifications",
    honorsAndAwards: "Honneurs et Récompenses",
    programmingLanguages: "Langages de Programmation",
    librariesFrameworks: "Bibliothèques/Frameworks",
    toolsPlatforms: "Outils/Plateformes",
    languages: "Langues",
    projects: "Projets Open Source",
    stacks: "Technologies Utilisées",
    descriptionTitle: "À Propos de Moi",
    acquiredKnowledge: "Expertise Pertinente",
  },
};

export default resumeDataFR;
