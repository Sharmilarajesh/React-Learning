import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //console.log(count);

  const handleIncrement=()=>{
    setCount(count+1)
    return handleIncrement;
  }
  const handleDecrement=()=>{
    setCount(count-1)
    return handleDecrement;
  }

  const handleReset=()=>{
    setCount(0);
  }



  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleIncrement}>Increament</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );





  // const [count, setCount] = useState(0);
  // //console.log(count);

  // return (
  //   <div>
  //     <h1>Counter:{count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Increament</button>
  //     <button onClick={() => setCount(count - 1)}>Decrement</button>
  //     <button onClick={() => setCount((0))}>Reset</button>
  //   </div>
  // );
};

export default Counter;
