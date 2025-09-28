import React, { useState } from 'react'
import ComponentOwo from './components/ComponentOwo'
import ComponentTwo from './components/ComponentTwo'

const App = () => {

  const [count, setCount] = useState(0);




  return (
    <section>

      <ComponentOwo count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />


    </section>
  )
}

export default App
