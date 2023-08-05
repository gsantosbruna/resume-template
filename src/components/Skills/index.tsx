import React from "react";

interface SkillsProps {
  programmingLanguages: string[];
  librariesFrameworks: string[];
  toolsPlatforms: string[];
  languages: string[];
  common: {
    programmingLanguages: string;
    librariesFrameworks: string;
    toolsPlatforms: string;
    languages: string;
  };
}

const Skills: React.FC<SkillsProps> = ({
  programmingLanguages,
  librariesFrameworks,
  toolsPlatforms,
  languages,
  common,
}) => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <span>
        <div className="skills-titles">
          <h3>{common.programmingLanguages}:</h3>
          <h3>{common.librariesFrameworks}:</h3>
          <h3>{common.toolsPlatforms}:</h3>
          <h3>{common.languages}:</h3>
        </div>
        <div>
          <p>{programmingLanguages.join(", ")}</p>
          <p>{librariesFrameworks.join(", ")}</p>
          <p>{toolsPlatforms.join(", ")}</p>
          <p>{languages.join(", ")}</p>
        </div>
      </span>
    </div>
  );
};

export default Skills;
