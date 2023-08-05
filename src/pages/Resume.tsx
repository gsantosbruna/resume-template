import React from "react";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Awards from "../components/Awards";

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
  };
  education: {
    school: string;
    location: string;
    degree: string;
    date: string;
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
  honorsAndAwards: string[];
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
    common,
  } = data;

  return (
    <div className="resume">
      <Profile {...profile} />
      <Education data={education} education={common.education} />
      <Experience data={experience} experience={common.experience} />
      <Skills {...skills} common={common} />
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