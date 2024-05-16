import React, { useReducer } from 'react'

const UseReducerHooks = () => {
   const reducer=(state,action)=>{
if(action.type=="INC"){
    state=state+1;
}
if(action.type=="DEC"){
    state=state-1;
}
return state;
   }
    const [count,dispatch]=useReducer(reducer,0)
  return (
   
    <>
     <button onClick={()=>{
            dispatch({type:'INC'})
        }}>
            +
        </button>
        <p>
            {count}
        </p>
        <button onClick={()=>{
              dispatch({type:'DEC'})
        }}>
            -
        </button>
        </>
  )
}

export default UseReducerHooks