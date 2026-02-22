import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageSelector = () => {
  const { setLanguage, text } = useContext(LanguageContext);

  return (
    <div >
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("ta")}>தமிழ்</button>
      <button onClick={() => setLanguage("hi")}>Hindi</button>

      <h3>{text.home}</h3>
    </div>
  );
};

export default LanguageSelector;
