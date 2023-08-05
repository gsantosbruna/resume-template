import React from "react";

interface HonorsAndAwardsProps {
  data: string[];
  honorsAndAwardsText: string;
}

const HonorsAndAwards: React.FC<HonorsAndAwardsProps> = ({
  data,
  honorsAndAwardsText,
}) => {
  return (
    <div className="honors-and-awards">
      <h2>{honorsAndAwardsText}</h2>
      <ul>
        {data.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
    </div>
  );
};

export default HonorsAndAwards;
