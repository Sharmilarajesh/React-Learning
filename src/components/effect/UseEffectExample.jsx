import React, { useState, useEffect } from "react"


const UseEffectExample = () => {
    const [count1, setCount1]=useState(0)
    const [count2, setCount2]=useState(0)

    useEffect(()=>{
        console.log("componenet mounted Use Effect 1")
    },[count1])

    useEffect(()=>{
        console.log("componenet mounted Use Effect 2")
    },[])
    

    const handleIncrement1=()=>{
        setCount1((prevState)=>{
            return prevState+1;
        });      
    }

    const handleIncrement2=()=>{
        setCount2((prevState)=>{
            return prevState+1;
        });      
    }

    const handleDecrement1=()=>{
        setCount1((prevState)=>{
            return prevState-1
        })
    }



  return (
    <div>
        <h1>Counter-1:{count1}</h1>
        <button onClick={handleIncrement1}>Increament</button>
        <h1>Counter-2:{count2}</h1>
        <button onClick={handleIncrement2}>Increament</button>

    </div>
  )
}

export default UseEffectExample