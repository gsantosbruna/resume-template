const resumeDataEN = {
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
      "During my mechanical engineering studies, I discovered a passion for programming. This passion grew while working as a software tester and QA engineer. To bridge my engineering background with my interest in informatics, I pursued a double degree in mechatronics and complex systems. Now seeking an end-of-studies internship as a software engineer to combine my creativity and my strong attention to quality due to my experience as a QA engineer.",
  },
  education: [
    {
      school: "Institut Supérieur de Mécanique de Paris (ISAE-Supméca)",
      location: "Paris, France",
      degree:
        "Engineering Degree Bac+5 (Master's equivalent) - Mechatronics and Complex Systems",
      date: "Aug 2022 - Jul 2024",
      acquiredKnowledge: [
        "Algorithms",
        "Deep Learning",
        "Networking and Communication",
        "Digital Systems",
        "Computer Architecture",
      ],
    },
    {
      school: "Federal University of Pernambuco (UFPE)",
      location: "Recife, Brazil",
      degree: "B.Sc. in Mechanical Engineering",
      date: "Aug 2018 - Jul 2024",
      acquiredKnowledge: [
        "Programming",
        "Mathematics",
        "Hardware-Sotware Interface",
        "Problem solving",
        "Interdisciplinary Inovation",
      ],
    },
  ],
  experience: [
    {
      title: "Project Researcher - Academical Internship",
      company: "ENERMAN",
      location: "Paris, France",
      date: "Sep 2022 - Jan 2023",
      description: [
        "Worked at ENERMAN, a European Union`s Horizon Research and Innovation Project to develop an energy management framework.",
        "Developed a Bayesian Network model to perform risk assessment analysis for the ENERMAN project.",
        "Utilized Python, specifically pgmpy and matplotlib libraries, to construct a bow-tie model for risk analysis.",
      ],
    },
    {
      title: "QA Engineer",
      company: "CESAR",
      location: "Recife, Brazil",
      date: "Jul 2021 - Aug 2022",
      description: [
        "Ensured product quality throughout the entire SCRUM project lifecycle.",
        "Devised and executed comprehensive test plans encompassing both functional and non-functional manual tests.",
        "Automated UI end-to-end tests for Apple operating systems (iOS and macOS) using Swift language and XCTest library.",
      ],
    },
    {
      title: "Software Test Engineer",
      company: "Motorola (Lenovo)",
      location: "Recife, Brazil",
      date: "Jul 2020 - Jul 2021",
      description: [
        "Completed an internship from July 2020 to April 2021, followed by a full-time role as a Test Engineer from April 2021 to July 2021.",
        "Conducted manual test cycles, including regression and exploratory functional tests.",
        "Developed and maintained automated test scripts for Android using Java throught UIAutomator framework.",
        "Investigated and tracked issues, initiated change requests (CRs), and performed retests tracked throught JIRA.",
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
      "Problem solving",
      "Cultural sensitivity",
      "Adaptability",
      "Team Working",
      "Collaboration",
      "Communication",
    ],
    languages: [
      "English (Fluent)",
      "French (Advanced)",
      "Portuguese (Native)",
      "Spanish (Intermediate)",
    ],
  },
  certifications: [
    "CTFL Foundation Level - ISTQB (International Software Testing Qualifications Board)",
    "TOEIC (990 out of 990) - TOEIC® Educational Testing Service (ETS)",
    "CESAR School - Test Automation, IT Extension. 2021-2022. Learned about software quality, software development, agile and waterfall methodologies, UI/UX design, and DevOps.",
  ],
  honorsAndAwards: [
    {
      award: `BRAFITEC Scholarship Awardee (Sep 2022 - Present)`,
      description: `Double degree financed by the Brazilian Coordination for the Improvement of Higher Education Personnel (CAPES), which offers scholarships to about 200 students who have excelled in brazilian engineering programs.`,
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
        "Pronunciation Check is a web application designed to assist with pronunciation improvement. It uses Google Cloud Speech to transcribe spoken words into text and then compares them to expected text, providing feedback.",
    },

    // {
    //   title: "Portfolio",
    //   image: "https://i.imgur.com/8XZJQZM.png",
    //   tags: ["React", "CSS", "HTML5"],
    //   githubLink: "https://github.com/gsantosbruna/portfolio",
    //   liveLink: "https://portfolio-gsantosbruna.vercel.app/",
    //   description:
    //     "My portfolio website built with React, CSS, and HTML5. It showcases my skills, projects, and experience.",
    // },
  ],
  common: {
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    certifications: "Certifications",
    honorsAndAwards: "Honors and Awards",
    programmingLanguages: "Programming Languages",
    librariesFrameworks: "Libraries/Frameworks",
    toolsPlatforms: "Tools/Platforms",
    languages: "Languages",
    projects: "Open Source Projects",
    stacks: "Tech stacks used",
    descriptionTitle: "About me",
    acquiredKnowledge: "Pertinent expertise",
  },
};

export default resumeDataEN;
