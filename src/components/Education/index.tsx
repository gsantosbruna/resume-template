import React from "react";

interface EducationProps {
  data: {
    school: string;
    location: string;
    degree: string;
    date: string;
  }[];

  education: string;
}

const Education: React.FC<EducationProps> = ({ data, education }) => {
  return (
    <div className="education">
      <h2>{education}</h2>
      {data.map((item, index) => (
        <div key={index}>
          <span>
            <h3>{item.school}</h3>
            <p>{item.location}</p>
          </span>
          <span>
            <p>{item.degree}</p>
            <p>{item.date}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Education;
