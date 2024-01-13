import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);
  return (
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ value, children }) => {
  const { selectedOption } = useSelectedOption();
  const isActive = selectedOption === value;
  return (
    <option
      className={`${isActive ? "bg-purple-500" : "bg-white"}`}
      value={value}
    >
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;
export default Select;

const useSelectedOption = () => {
  const Context = useContext(SelectContext);

  if (!Context) {
    throw new Error("Context Out Of Bound.");
  }
  return Context;
};
