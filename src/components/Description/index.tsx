import React from "react";

type DescriptionProps = {
  title: string;
  description: string;
};

const Description = ({ title, description }: DescriptionProps) => {
  return (
    <div className="honors-and-awards">
      <h2>{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Description;
