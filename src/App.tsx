import React from "react";
import Resume from "./pages/Resume";
import "./styles.css";
import resumeDataEN from "./data/en";
import resumeDataFR from "./data/fr";
import resumeDataPTBR from "./data/pt-br";
import LanguageToggle from "./components/LanguageToggle";
import { useState } from "react";

const App: React.FC = () => {
  const [language, setLanguage] = useState("en");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setLanguage(newAlignment);
    setData(() => {
      switch (newAlignment) {
        case "en":
          return resumeDataEN;
        case "fr":
          return resumeDataFR;
        case "pt-br":
          return resumeDataPTBR;
        default:
          return resumeDataEN;
      }
    });
  };

  const [data, setData] = useState(resumeDataEN);

  return (
    <div className="App">
      <LanguageToggle onChange={handleChange} language={language} />
      <Resume data={data} />
    </div>
  );
};

export default App;
