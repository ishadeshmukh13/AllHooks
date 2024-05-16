import React, { forwardRef, useDebugValue, useImperativeHandle, useRef, useState } from 'react'

const UseImprativeHook = () => {
    let ref=useRef(null);
    
  return (
    <>
   <ChildComponentUse ref={ref}/>
   <button onClick={()=>{
 ref.current.addTodo();
   }
}> 
    Add
   </button>
   
    </>

  )
}
const ChildComponent=({},ref)=>{
    const [number,setNumber]=useState(0);
    useDebugValue(number)
    useImperativeHandle(ref,()=>{
      return {  addTodo(){
        setNumber(number+1)
       
            console.log("hellooo")
        },
    }
    },[])
    return <>
    <p>
        Hellooo
    </p>
    </>
}
const ChildComponentUse=forwardRef(ChildComponent)

export default UseImprativeHook