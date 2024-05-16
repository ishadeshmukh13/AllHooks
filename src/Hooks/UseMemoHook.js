import React, { useState,useMemo } from 'react'

const UseMemoHook = () => {
    const [count,setCount]=useState(0);
    const [count2,setcount2]=useState(0);
    const increaemnt=()=>{
        console.log("hellloo333");
        setCount(count+1)
    }
    const decreaemnt=
    useMemo(() =>  ()=>{
        console.log("hellloo3");

        setCount(count+1)
    }, count)
   
    const increaemnt2=()=>{
        console.log("hellloo1");

        setcount2(count2+1)
    }
    const decreaemnt2=()=>{
        console.log("hellloo4");

        setcount2(count2+1)
    }
  return (
    <div>
    <button onClick={()=>{
       increaemnt()
    }}>
        +
    </button>
    <p>
        {count}
    </p>
    <button onClick={()=>{
        decreaemnt()
    }}>
        -
    </button>
    <button onClick={()=>{
       increaemnt2()
    }}>
        +
    </button>
    <p>
        {count2}
    </p>
    <button onClick={()=>{
        decreaemnt2()
    }}>
        -
    </button>
</div>
  )
}

export default UseMemoHook