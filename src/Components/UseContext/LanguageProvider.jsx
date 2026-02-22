import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import languages from "./languages";


const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        text: languages[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
