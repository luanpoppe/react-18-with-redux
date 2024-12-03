import { useState } from "react";

const UseStateBasics = () => {
  // const value = useState("hello")[0];
  // console.log("value: ", value);
  // const func = useState("hello")[1];
  // console.log("func: ", func);
  const [count, setCount] = useState(0);
  console.log("count: ", count);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
