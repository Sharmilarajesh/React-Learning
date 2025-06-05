import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [toggle,setToggle]=useState(false)

    console.log('Timer component mounted')


  return (
    <div>
        <button onClick={()=>{setToggle(!toggle)}}>Click me</button>
           {/* {console.log(toggle)} */}
           {toggle && <DemoComponent/> }
    </div>
  
  )

}

export default Timer


function DemoComponent(){
    console.log("demo compoenet mounted")

    useEffect(()=>{
        console.log("Use effect in demo component")
        const taskOne= setInterval(()=>{
            console.log("testing"),1000
        })

        return ()=>{
            clearInterval(taskOne);
            console.log('Cleanup func called demo component unmounted')
        }
    },[])

    return <h1>I'm from demo component</h1>
}