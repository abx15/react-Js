import { createContext } from 'react'

import React from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'


export const Data = createContext()
export const Data1 = createContext()

const App = () => {

  const name = "Arun"

  const age = "21"
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <h1>Hello World</h1>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </Data1.Provider>

      </Data.Provider>
    </div>
  )
}

export default App
