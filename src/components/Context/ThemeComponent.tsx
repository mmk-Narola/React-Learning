import { useContext } from "react";
import { ThemeContext } from "./UseContext";

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>The current theme is {theme}.</p>
    </div>
  );
};

export default ThemeComponent;
