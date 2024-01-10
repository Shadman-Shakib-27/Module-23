import React, { useEffect, useRef } from "react";
import CustomInput from "../Components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);
  console.log(myRef);
  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>UseRef</h1>
      <CustomInput className="border border-red-400" ref={myRef} />
      <input type="submit" value="Submit" />
    </div>
  );
};

export default UseRefExample;

//
