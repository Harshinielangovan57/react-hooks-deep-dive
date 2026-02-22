import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Home = () => {
  const { text } = useContext(LanguageContext);

  return <h1>{text.welcome}</h1>;
};

export default Home;
