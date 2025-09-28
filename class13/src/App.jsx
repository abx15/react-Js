import React, { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => {


  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }



    case "decrement":
      return {
        ...state, count: state.count-1
      };

    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
      break;
  }
}

const App = () => {

  const [state, disptach] = useReducer(reducer, initialState)



  return (
    <div>
      <h1>Count: {state.count}</h1>

      <button onClick={() => disptach({ type: "increment" })}>+</button>
      <button onClick={() => disptach({ type: "decrement" })}>-</button>
      <button onClick={() => disptach({ type: "reset" })}>Reset</button>
    </div>
  )
}

export default App
