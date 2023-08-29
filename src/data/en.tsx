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
      "I am a Mechanical Engineering student and former QA Engineer, currently enhancing my skills in front-end development. Through my diverse engineering background, I've developed a passion for utilizing technology to tackle complex problems. Whether it's Python, Swift, or my recent explorations into JavaScript, CSS, and HTML, I am committed to creating high-quality, user-centric solutions. Welcome to my portfolio!",
  },
  education: [
    {
      school: "Institut Supérieur de Mécanique de Paris (ISAE-Supméca)",
      location: "Paris, France",
      degree:
        "Bac +5 Mechanical Engineering - Mechatronics and Complex Systems (Double degree)",
      date: "Aug 2022 - Jul 2024",
    },
    {
      school: "Federal University of Pernambuco (UFPE)",
      location: "Recife, Brazil",
      degree: "B.Sc. in Mechanical Engineering",
      date: "Aug 2018 - Jul 2024",
    },
    {
      school: "CESAR School",
      location: "Recife, Brazil",
      degree: "Test Automation, IT Extension",
      date: "Jul 2021 - Aug 2022",
    },
  ],
  experience: [
    {
      title: "Project Researcher",
      company: "ENERMAN",
      location: "Paris, France",
      date: "Sep 2022 - Jan 2023",
      description: [
        "Researched and developed a Bayesian Network model to create risk assessment analysis of an energy prediction tool (ENERMAN).",
        "Used Python, especially pgmpy and matplotlib libraries, to build a bow-tie model for risk analysis.",
      ],
    },
    {
      title: "QA Engineer",
      company: "CESAR",
      location: "Recife, Brazil",
      date: "Jul 2021 - Aug 2022",
      description: [
        "Responsible for guaranteeing product quality since its conception inside a SCRUM project.",
        "Created and executed test plans for functional and non-functional manual tests.",
        "Created UI automated E2E tests using Swift language and XCUITest framework on Apple operating systems (iOS and macOS).",
      ],
    },
    {
      title: "Software Test Engineer",
      company: "Motorola (Lenovo)",
      location: "Recife, Brazil",
      date: "Jul 2020 - Jul 2021",
      description: [
        "Internship (July 2020 - Apr 2021) | Full-time Test Engineer (Apr 2021 - Jul 2021) ",
        "Executed manual test cycles with regression and exploratory functional tests.",
        "Execution and maintenance of automated test scripts for Android using Java and UIAutomator.",
        "Investigation and tracking of issues, opening change requests (CRs) and retests with JIRA.",
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
      "CSS",
      "HTML5",
      "XCUITest",
      "Selenium",
      "Node.js",
      "Next.js",
    ],
    toolsPlatforms: ["Arduino", "JIRA", "Git", "GitHub", "Jenkins", "API"],
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
        "Real-time language pronunciation feedback, powered by Google Cloud Speech, for improving speaking skills in many languages.",
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
    honorsAndAwards: "Others",
    programmingLanguages: "Programming Languages",
    librariesFrameworks: "Libraries/Frameworks",
    toolsPlatforms: "Tools/Platforms",
    languages: "Languages",
    projects: "Projects",
    stacks: "Tech stacks used",
  },
};

export default resumeDataEN;
