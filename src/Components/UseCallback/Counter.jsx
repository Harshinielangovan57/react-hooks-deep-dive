import React, { useState, useCallback } from 'react'
import CounterDisplay from './CounterDisplay'


const Counter = () => {
  const [count, setCount] = useState(0)
  const[otherCount, setOtherCount] = useState(0)
  
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])  

  console.log("count")

    // const doubleCount = useMemo (() => {
    //   console.log("doublecount")
    //   return count*2
    // },[count])

  return (
    <div style={{ padding: '20px', border: '2px solid red' }}>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      {/* <p>DoubleCount: {doubleCount}</p> */}
      <p>OtherCount : {otherCount}</p>
      <button onClick={()=>setOtherCount(otherCount + 1)}>Update</button>

      <CounterDisplay 
        onButtonClick={handleIncrement} 
        count={count} 
      />
    </div>
  )
}

export default Counter;