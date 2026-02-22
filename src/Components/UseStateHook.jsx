import React, { useState } from 'react'

const UseStateHook = () => {
    const[lives, setLives] = useState(3)
    
    const hitPLayer = () =>{
        if(lives > 0){
            setLives(lives - 1)
        }

    }
    

  return (
    <div>
        <h4>{"💙".repeat(lives)}</h4>
        <button onClick={hitPLayer} disabled={lives === 0}>Hit</button>
        {lives === 0 && <h2>Game Over</h2> }

    </div>
  )
}

export default UseStateHook