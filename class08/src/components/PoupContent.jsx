import React from 'react'
import  {createPortal} from "react-dom"
const PoupContent = ({copied}) => {
  return createPortal (
    <section>
      {copied && (
        <div>Copied to clipboard</div>
      )}
    </section>,
    document.querySelector('#popup-content')
  )
}

export default PoupContent
