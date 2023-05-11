import { createContext, useState } from "react";
import ThemeComponent from "./ThemeComponent";

type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<ThemeContextType>("light");

const UseContext = () => {
  const [theme, setTheme] = useState<ThemeContextType>("light");
  return (
    <div>
      <h2>UseContext with Typescript</h2>
      <ThemeContext.Provider value={theme}>
        <ThemeComponent />
      </ThemeContext.Provider>
    </div>
  );
};

export default UseContext;
