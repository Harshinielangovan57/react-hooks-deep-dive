import React from 'react'
import { useParams } from 'react-router-dom'

const name = ["Harshini","Sarmathi","Nancy","Ramana"]

const UseParamsHook = () => {
    const {nameId} = useParams() 
    
    
  return (
    <div>
        <h2>Name : {name[nameId]}</h2>
        <h4>Name Id : {nameId}</h4>
    </div>
  )
}

export default UseParamsHook