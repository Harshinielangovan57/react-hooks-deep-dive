import React from 'react'

const CounterDisplay = ({ onButtonClick, count }) => {
  console.log("Rendered")
  
  return (
    <div style={{ padding: '20px', border: '2px solid blue', margin: '10px' }}>
      <h3>Counter Display Component</h3>
      <p>Count from Counter: {count}</p>
      <button onClick={onButtonClick}>
        Increment Count
      </button>
    </div>
  )
}

export default CounterDisplay;