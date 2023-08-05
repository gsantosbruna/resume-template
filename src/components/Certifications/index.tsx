import React from "react";

interface CertificationsProps {
  data: string[];
  certificationsText: string;
}

const Certifications: React.FC<CertificationsProps> = ({
  data,
  certificationsText,
}) => {
  return (
    <div className="certifications">
      <h2>{certificationsText}</h2>
      <ul>
        {data.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
