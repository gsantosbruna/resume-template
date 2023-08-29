import React from "react";
// @ts-ignore
import githubIcon from "./github.svg";
// @ts-ignore
import liveIcon from "./link.svg";

interface ExperienceProps {
  data: {
    title: string;
    image: string;
    tags: string[];
    githubLink: string;
    liveLink: string;
    description: string;
  }[];

  projects: string;
  stacks: string;
}

const Projects: React.FC<ExperienceProps> = ({ data, projects, stacks }) => {
  return (
    <div className="experience">
      <h2>{projects}</h2>
      {data.map((item, index) => (
        <div key={index} style={{}}>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <a href={item.githubLink}>
              <img
                src={githubIcon}
                alt="GitHub Repository"
                style={{ width: "16px" }}
              />
            </a>
            <a href={item.liveLink}>
              <img
                src={liveIcon}
                alt="Live Preview"
                style={{ width: "16px" }}
              />
            </a>
            <h3>{item.title}</h3>
          </span>
          <ul style={{ margin: 0, padding: 0 }}>
            {item.description}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: 0,
                height: "auto",
                marginTop: "0.5rem",
                gap: "0.5rem",
              }}
            >
              <h3 style={{ margin: 0 }}>{stacks}</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  margin: 0,
                  gap: "0.5rem",
                }}
              >
                {item.tags.map((tag) => {
                  return <p key={tag}>{tag}</p>;
                })}
              </div>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
