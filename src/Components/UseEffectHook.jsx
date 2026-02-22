import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const[text, setText] = useState("")
    const[textWarning, setTextWarning] = useState("")

    useEffect(()=>{
        if(text.length === 0){
            setTextWarning("No text")
        }
        else if(text.length > 7){
            setTextWarning("Limited text can be allowed")
        }else{
            setTextWarning("")
        }
    //  console.log(typeof textWarning)   
    },[text])

  return (
    <div>
        <input type='text' placeholder='Enter the text' value={text} onChange={(e) => setText(e.target.value)} />
        {textWarning && <p>{textWarning}</p>}
    </div>
  )
}

export default UseEffectHook