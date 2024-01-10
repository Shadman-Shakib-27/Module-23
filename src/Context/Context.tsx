import React, { ReactNode, createContext, useState } from "react";

export type TThemeContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type TThemeContextProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

const Context = ({ children }: TThemeContextProps) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default Context;
