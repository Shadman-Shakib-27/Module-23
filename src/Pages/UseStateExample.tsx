import React, { useState } from "react";

const UseStateExample = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //  (e) => setUser({ ...user, name: e.target.value });
    const inputName = e.target.name;
    const value = e.target.value;
    console.log({[inputName]:value});
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        onChange={handleChange}
        className="border"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={handleChange}
        className="border"
        type="text"
        name="name"
        id="name"
      />
      <input
        className="border bg-orange-300 p-2 rounded-md"
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default UseStateExample;

// type Tcounter = {
//    counter: number;
//    setCounter: Dispatch<React.SetStateAction<number>>;
//  };

//   const handleIncreament = () => {
//     setCounter((prvState) => prvState + 1);
//     setCounter((prvState) => prvState + 1);
//     setCounter((prvState) => prvState + 1);
//   };
//   const handleAsyncIncreament = () => {
//     setTimeout(() => {
//       setCounter(counter + 1);
//     }, 2000);
//   };

{
  /* <h1 className="text-3xl font-bold">{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn bg-orange-300 p-2 rounded-md text-white font-bold mr-2"
      >
        Increament
      </button>
      <button
        onClick={() => setCounter((prvstate) => prvstate - 1)}
        className="btn bg-gray-900 p-2 rounded-md text-white font-bold mr-2"
      >
        Decreament
      </button>
      <button
        onClick={() => setCounter(0)}
        className="btn bg-blue-300 p-2 rounded-md text-white font-bold"
      >
        Reset
      </button> */
}
