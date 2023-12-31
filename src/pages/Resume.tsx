import React from "react";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Awards from "../components/Awards";
// import Description from "../components/Description";
import Projects from "../components/Projects";
import Description from "../components/Description";

interface ResumeData {
  profile: {
    name: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    portfolio: string;
    linkedin: string;
    blog: string;
    aboutMe: string;
  };
  education: {
    school: string;
    location: string;
    degree: string;
    date: string;
    acquiredKnowledge: string[];
  }[];
  experience: {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
  }[];
  skills: {
    programmingLanguages: string[];
    librariesFrameworks: string[];
    toolsPlatforms: string[];
    languages: string[];
  };
  certifications: string[];
  honorsAndAwards: {
    award: string;
    description: string;
  }[];
  projects: {
    title: string;
    image: string;
    tags: string[];
    githubLink: string;
    liveLink: string;
    description: string;
  }[];
  common: {
    education: string;
    experience: string;
    skills: string;
    certifications: string;
    honorsAndAwards: string;
    programmingLanguages: string;
    librariesFrameworks: string;
    toolsPlatforms: string;
    languages: string;
    projects: string;
    stacks: string;
    descriptionTitle: string;
    acquiredKnowledge: string;
  };
}

interface ResumeProps {
  data: ResumeData;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const {
    profile,
    education,
    experience,
    skills,
    certifications,
    honorsAndAwards,
    projects,
    common,
  } = data;

  return (
    <div className="resume">
      <Profile {...profile} />
      <Description
        title={common.descriptionTitle}
        description={profile.aboutMe}
      />
      <Experience data={experience} experience={common.experience} />
      <Projects
        data={projects}
        projects={common.projects}
        stacks={common.stacks}
      />
      <Skills {...skills} common={common} />
      <Education
        data={education}
        education={common.education}
        title={common.acquiredKnowledge}
      />
      <Certifications
        data={certifications}
        certificationsText={common.certifications}
      />
      <Awards
        data={honorsAndAwards}
        honorsAndAwardsText={common.honorsAndAwards}
      />
    </div>
  );
};

export default Resume;
