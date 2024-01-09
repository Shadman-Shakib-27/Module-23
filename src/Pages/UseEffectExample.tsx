import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    console.log("Render.");
  }, [user.name,user.email]);

  return (
    <div>
      <input
        className="border border-red-500"
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
      />
      <input
        className="border border-red-500"
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        name="email"
        id="email"
      />

      {/* <button
        onClick={() => setHidden((prv) => !prv)}
        className="btn p-2 rounded-md bg-red-300 mr-96"
      >
        {hidden ? "Show" : "Hide"}
      </button>
      {!hidden && <ToDo />} */}
    </div>
  );
};
// Counter Components
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <h1 className="border border-red-500 p-10 w-56 ml-80 ">{count}</h1>;
};

// ToDo
const ToDo = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`, { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));
    return () => {
      controller.abort();
    };
  }, []);

  return <div className="border border-red-500 p-10 w-56 ml-80">Todo</div>;
};

export default UseEffectExample;
