import React, { createContext, useContext } from 'react'
const createContextVar=createContext();
export const ContextProvide=({children})=>{
    const value={
        name:'test',
        data:[
            {
                name:'test1'
            },
            {
                name:'test2'
            }
        ]
    }
    return <createContextVar.Provider value={value}>
{children}
    </createContextVar.Provider>
}

const UseContextHook = () => {
    const context=useContext(createContextVar)
    console.log(context,"valuuuu");
  return (
    <div>
        <p>
            {context.name}
        </p>

    </div>
  )
}


export default UseContextHook;
