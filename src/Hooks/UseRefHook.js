import React, { useRef } from 'react'

const UseRefHook = () => {
    let count=useRef(0)
  return (
    <>
   <p>
    {count.current}

   </p>
   <p onClick={()=>{
    count.current=count.current+1
    console.log(count.current)
   }}>
    +
   </p>
    <p onClick={()=>{
    count.current=count.current-1
    console.log(count.current)
   }}>
    -
   </p>
    </>
  )
}

export default UseRefHook