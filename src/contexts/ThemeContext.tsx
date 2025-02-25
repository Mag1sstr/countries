import { createContext, useContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}
interface IThemeContext {
  dark: boolean;
  setDark: (b: boolean) => void;
}
export const ThemeContext = createContext({} as IThemeContext);

export default function ThemeContextProvider({ children }: IProps) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
