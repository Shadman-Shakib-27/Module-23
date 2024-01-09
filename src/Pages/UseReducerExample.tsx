import { ChangeEvent, useReducer } from "react";

const initialState = { name: "", email: "" };

const reducer = (currentState: typeof initialState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };
    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border"
          type="text"
          name="name"
          id="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          className="border"
          type="text"
          name="email"
          id="email"
        />
        <input
          className="border bg-orange-300 p-2 rounded-md"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default UseReducerExample;

// ---------------------- For Counter Part -------------------------

// const initialState = { count: 0 };

// const reducer = (currentState, action) => {
//   switch (action.type) {
//     case "Increament":
//       return { count: currentState.count + 1 };
//     case "Decreament":
//       return { count: currentState.count - 1 };
//     case "DecreamentBySomeAmount":
//       return { count: currentState.count - action.payload };
//     default:
//       return currentState;
//   }
// };

{
  /* <button
onClick={() => dispatch({ type: "Increament" })}
className="btn bg-orange-300 p-2 rounded-md"
>
Increament
</button>
<button
onClick={() => dispatch({ type: "Decreament" })}
className="btn bg-blue-300 p-2 rounded-md"
>
Decreament
</button>
<button
onClick={() => dispatch({ type: "DecreamentBySomeAmount", payload: 3 })}
className="btn bg-blue-300 p-2 rounded-md"
>
Decreament By 3
</button> */
}

// ---------------------- For Counter Part -------------------------
