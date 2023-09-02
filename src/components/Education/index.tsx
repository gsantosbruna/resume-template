import React from "react";

interface EducationProps {
  data: {
    school: string;
    location: string;
    degree: string;
    date: string;
    acquiredKnowledge: string[];
  }[];

  education: string;
  title: string;
}

const Education: React.FC<EducationProps> = ({ data, education, title }) => {
  return (
    <div className="education">
      <h2>{education}</h2>
      {data.map((item, index) => (
        <div>
          <div key={index}>
            <span>
              <h3>{item.school}</h3>
              <p>{item.location}</p>
            </span>
            <span>
              <p>{item.degree}</p>
              <p>{item.date}</p>
            </span>

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
              <h3 style={{ margin: 0, fontSize: 12, opacity: 0.7 }}>{title}</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  margin: 0,
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                {item.acquiredKnowledge.map((tag) => {
                  return (
                    <p style={{ fontSize: 12, opacity: 0.7 }} key={tag}>
                      {tag}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
