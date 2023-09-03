const resumeDataPTBR = {
  profile: {
    name: "Bruna Santos",
    email: "bruna.roberta@ufpe.br",
    phone: "+33 06 56 67 55 35",
    location: "Saint-Ouen-sur-Seine, França",
    github: "https://github.com/gsantosbruna/",
    portfolio: "https://bruna-santos-portfolio.webflow.io/",
    linkedin: "https://www.linkedin.com/in/brunarobertasantos/",
    blog: "https://medium.com/@brunasantos_38597",
    aboutMe:
      "Durante meus estudos de engenharia mecânica, descobri uma paixão pela programação. Essa paixão cresceu enquanto trabalhava como testadora de software e engenheira de QA. Para unir minha formação em engenharia com meu interesse em informática, busquei um duplo diploma em mecatrônica e sistemas complexos. Agora estou em busca de um estágio de fim de curso como engenheira de software para combinar minha criatividade com minha forte atenção à qualidade devido à minha experiência como engenheira de QA.",
  },
  education: [
    {
      school: "Instituto Superior de Mecânica de Paris (ISAE-Supméca)",
      location: "Paris, França",
      degree:
        "Diploma de Engenharia Bac+5 (equivalente a Mestrado) - Mecatrônica e Sistemas Complexos",
      date: "Ago 2022 - Jul 2024",
      acquiredKnowledge: [
        "Algoritmos",
        "Deep Learning",
        "Redes e Comunicação",
        "Sistemas Digitais",
        "Arquitetura de Computadores",
      ],
    },
    {
      school: "Universidade Federal de Pernambuco (UFPE)",
      location: "Recife, Brasil",
      degree: "Bacharelado em Engenharia Mecânica",
      date: "Ago 2018 - Jul 2024",
      acquiredKnowledge: [
        "Programação",
        "Matemática",
        "Interface Hardware-Software",
        "Resolução de Problemas",
        "Inovação Interdisciplinar",
      ],
    },
  ],
  experience: [
    {
      title: "Pesquisadora de Projetos - Estágio Acadêmico",
      company: "ENERMAN",
      location: "Paris, França",
      date: "Set 2022 - Jan 2023",
      description: [
        "Trabalhei na ENERMAN, um Projeto de Pesquisa da União Europeia para desenvolver um framework de gerenciamento de energia.",
        "Desenvolvi um modelo de Rede Bayesiana para realizar análise de risco para o projeto ENERMAN.",
        "Utilizei Python, especificamente as bibliotecas pgmpy e matplotlib, para construir um modelo de bow-tie para análise de risco.",
      ],
    },
    {
      title: "Engenheira de QA",
      company: "CESAR",
      location: "Recife, Brasil",
      date: "Jul 2021 - Ago 2022",
      description: [
        "Garanti a qualidade do produto durante todo o ciclo de vida do projeto SCRUM.",
        "Elaborei e executei planos de teste abrangendo testes manuais funcionais e não funcionais.",
        "Automatizei testes de UI E2E para sistemas Apple (iOS e macOS) usando a linguagem Swift e a biblioteca XCTest.",
      ],
    },
    {
      title: "Engenheira de Teste de Software",
      company: "Projeto CIn/Motorola (Lenovo)",
      location: "Recife, Brasil",
      date: "Jul 2020 - Jul 2021",
      description: [
        "Conclui um estágio de julho de 2020 a abril de 2021, seguido de CLT como Engenheira de Teste de abril de 2021 a julho de 2021.",
        "Conduzi ciclos de teste manuais, incluindo testes de regressão e testes funcionais exploratórios.",
        "Desenvolvi e mantive scripts de teste automatizados para Android usando Java por meio do framework UIAutomator.",
        "Investiguei e rastreei problemas, iniciei solicitações de mudança (CRs) e realizei retestes rastreados pelo JIRA.",
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
      "Resolução de Problemas",
      "Sensibilidade Cultural",
      "Adaptabilidade",
      "Trabalho em Equipe",
      "Colaboração",
      "Comunicação",
    ],
    languages: [
      "Inglês (Fluente)",
      "Francês (Avançado)",
      "Português (Nativo)",
      "Espanhol (Intermediário)",
    ],
  },
  certifications: [
    "CTFL Foundation Level - ISTQB (Conselho Internacional de Qualificações em Testes de Software)",
    "TOEIC (990 de 990) - Educational Testing Service (ETS)",
    "CESAR School - Automação de Testes, Extensão em TI. 2021-2022. Aprendizado sobre qualidade de software, desenvolvimento de software, metodologias ágeis e em cascata, design UI/UX e DevOps.",
  ],
  honorsAndAwards: [
    {
      award: `Bolsista do Programa BRAFITEC (Set 2022 - Presente)`,
      description: `Duplo diploma financiado pela Coordenação Brasileira de Aperfeiçoamento de Pessoal de Nível Superior (CAPES), que oferece bolsas a estudantes que se destacaram nos programas de engenharia brasileiros.`,
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
        "O Pronunciation Checker é uma aplicação web projetada para ajudar na melhoria da pronúncia. Ele utiliza o Google Cloud Speech para transcrever palavras faladas em texto e, em seguida, compara-os com o texto esperado, fornecendo feedback.",
    },

    // {
    //   title: "Portfolio",
    //   image: "https://i.imgur.com/8XZJQZM.png",
    //   tags: ["React", "CSS", "HTML5"],
    //   githubLink: "https://github.com/gsantosbruna/portfolio",
    //   liveLink: "https://portfolio-gsantosbruna.vercel.app/",
    //   description:
    //     "Meu site de portfólio construído com React, CSS e HTML5. Ele apresenta minhas habilidades, projetos e experiência.",
    // },
  ],
  common: {
    education: "Educação",
    experience: "Experiência",
    skills: "Habilidades",
    certifications: "Certificações",
    honorsAndAwards: "Honras e Prêmios",
    programmingLanguages: "Linguagens de Programação",
    librariesFrameworks: "Bibliotecas/Frameworks",
    toolsPlatforms: "Ferramentas/Plataformas",
    languages: "Idiomas",
    projects: "Projetos Open Source",
    stacks: "Tecnologias Utilizadas",
    descriptionTitle: "Sobre Mim",
    acquiredKnowledge: "Conhecimento Pertinente",
  },
};

export default resumeDataPTBR;
