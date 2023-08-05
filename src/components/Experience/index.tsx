import React from "react";

interface ExperienceProps {
  data: {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
  }[];

  experience: string;
}

const Experience: React.FC<ExperienceProps> = ({ data, experience }) => {
  return (
    <div className="experience">
      <h2>{experience}</h2>
      {data.map((item, index) => (
        <div key={index}>
          <span>
            <h3>
              {item.company} | {item.title}
            </h3>
            <p>
              {item.location} | {item.date}
            </p>
          </span>
          <ul>
            {item.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
