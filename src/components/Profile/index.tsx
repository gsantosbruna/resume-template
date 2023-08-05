import React from "react";
interface ProfileProps {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  portfolio: string;
  linkedin: string;
  blog: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  email,
  phone,
  location,
  github,
  portfolio,
  linkedin,
  blog,
}) => {
  return (
    <div className="profile">
      <h1>{name}</h1>
      <p>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          {email}
        </a>
        {"  "}|{"  "}
        <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
          {phone}
        </a>
        {"  "}| {location}
      </p>
      <div>
        <a
          href={github}
          className="profile-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={portfolio}
          className="profile-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        <a
          href={linkedin}
          className="profile-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href={blog}
          className="profile-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </div>
  );
};

// Add the following CSS to your stylesheet

export default Profile;
