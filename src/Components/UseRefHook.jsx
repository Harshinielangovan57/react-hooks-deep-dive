import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const[toggle, setToggle] = useState(false)
    const inputRef = useRef({
        name:"",
        age: 0,
        city: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setToggle(true)
    }

    // console.log(inputRef.current)
    
  return (
    <div>UseRefHook
        <form>
            <label>Name:</label>
            <input type='text' onChange={(e) => (inputRef.current.name = e.target.value)} />
            <label>Age:</label>
            <input type='number' onChange={(e) => (inputRef.current.age = e.target.value)} />
            <label>City:</label>
            <input type='text' onChange={(e) => (inputRef.current.city = e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        {toggle && <div>
            <p>Name : {inputRef.current.name}</p>
            <p>Age : {inputRef.current.age}</p>
            <p>city : {inputRef.current.city}</p>
        </div>}
    
    </div>
  )
}

export default UseRefHook