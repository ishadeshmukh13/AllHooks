import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {
    const [data,setData]=useState([])
    const [number,setNumber]=useState(0)
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setData(json.products))
        console.log("hellloooo")
    },[])
  return (
    <div>
        <p onClick={()=>{
setNumber(number+1)
        }}>
            number{number}
        </p>
        {
            data.map((item)=>{
                return<>
                <p>
                    {item.description}
                </p>
                </>
            })

        }
    </div>
  )
}

export default UseEffectHooks