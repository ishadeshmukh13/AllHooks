import React, { useState,useCallback } from 'react'
import { memo } from "react";
const UseCallbackFUnction = () => {
    const [count,setCount]=useState(0)
    const [todo,setTodo]=useState([]);
    const increaemnt=()=>{
        console.log("hello inc")
        setCount(count+1)
    }
    const decreaemnt=()=>{
        console.log("hello dec")
  
        setCount(count-1)
    }
    const addTOdo=useCallback(()=>{
        console.log("hello todo")

setTodo([...todo,"new todo"])

    }, [todo])
  return (
    <>
    <p onClick={()=>{increaemnt()}}>
        +
    </p>
    <p>
{count}
    </p>
    <p onClick={()=>{decreaemnt()}}>
        -
    </p>
    <Todo addTOdo={addTOdo} todo={todo}/>
    </>
  )
}

const Todo=memo(({addTOdo,todo})=>{
    console.log("child render");
    return<>
    <button onClick={
        addTOdo
    }>
        add todo
    </button>
    {
todo.map((item,index)=>{
   return <p>
        {item}{index}
    </p>
})
    }
    </>

})
export default memo(UseCallbackFUnction)