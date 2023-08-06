import React from "react";

interface HonorsAndAwardsProps {
  data: {
    award: string;
    description: string;
  }[];
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
        {data.map((award) => (
          <div>
            <li key={data.indexOf(award)}>{award.award}</li>
            <p>{award.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HonorsAndAwards;
