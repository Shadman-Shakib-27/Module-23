// import UseEffectExample from "./Pages/UseEffectExample";
// import UseReducerExample from "./Pages/UseReducerExample";
// import UseStateExample from "./Pages/useStateExample";
import { useContext } from "react";
// import UseRefExample from "./Pages/UseRefExample";
import { TThemeContext, ThemeContext } from "./Context/Context";

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
      <button onClick={() => setDark(!dark)} className="btn btn-primary">
        Toggle
      </button>
    </div>
  );
}

export default App;
