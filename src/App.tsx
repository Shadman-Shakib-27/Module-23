// import UseEffectExample from "./Pages/UseEffectExample";
// import UseReducerExample from "./Pages/UseReducerExample";
// import UseStateExample from "./Pages/useStateExample";
import { useContext } from "react";
// import UseRefExample from "./Pages/UseRefExample";
import { TThemeContext, ThemeContext } from "./Context/Context";
import UsersContainer from "./Components/UsersContainer";
import Select from "./Components/SelectOption";
// import Profile from "./Components/Profile";
// import GameResult from "./Components/GameResult";

function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  return (
    <div
      className={`h-screen w-full flex items-center justify-center ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* <UseStateExample /> */}
      {/* <UseReducerExample /> */}
      {/* <UseEffectExample /> */}
      {/* <UseRefExample /> */}
      <button
        onClick={() => setDark(!dark)}
        className="btn bg-orange-300 p-2 rounded-md"
      >
        Toggle
      </button>
      {/* <Profile/> */}
      {/* <GameResult /> */}
      {/* <UsersContainer/> */}
      <Select>
        <Select.SelectOption value="Option1">Option1</Select.SelectOption>
        <Select.SelectOption value="Option1">Option1</Select.SelectOption>
        <Select.SelectOption value="Option1">Option1</Select.SelectOption>
        <Select.SelectOption value="Option1">Option1</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
