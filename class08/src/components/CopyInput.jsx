import React, { useState } from 'react'
import PoupContent from './PoupContent'

const CopyInput = () => {

    const [inputValue,setInputValue] = useState('')
    const [copied ,setCopied] = useState(false)

    const handleCopy = () =>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true)
            setTimeout(()=> setCopied(false),5000 )
        })
    }




  return (
    <div>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleCopy}>Copy</button>
      <PoupContent copied={copied} />
    </div>
  )
}

export default CopyInput
