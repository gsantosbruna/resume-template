import { ToggleButton, ToggleButtonGroup } from "@mui/material";

type LanguageToggleProps = {
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => void;
  language: string;
};

export default function LanguageToggle({
  onChange: handleChange,
  language,
}: LanguageToggleProps) {
  return (
    <span className="language-toggle">
      <ToggleButtonGroup
        color="primary"
        value={language}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="language-toggle"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem auto",
        }}
      >
        <ToggleButton value="en">English</ToggleButton>
        <ToggleButton value="fr">Français</ToggleButton>
        <ToggleButton value="pt-br">Português</ToggleButton>
      </ToggleButtonGroup>
    </span>
  );
}
