import React, { createContext, useContext } from "react";

const MenuContext = createContext("");

export const MenuList = ({ children }) => {
  return (
    <MenuContext.Provider value={{ theme: "Dark." }}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};
export const MenuItem = () => {
  const { theme } = useContext(MenuContext);
  console.log(theme);
  return <div>Menu Item.</div>;
};
