import { useReducer, useState } from 'react';
import { counterReducer, initialState } from "../CounterReducer"

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => {
        dispatch({ type: "increment" })
    }
    const handleDecrement = () => {
        dispatch({ type: "decrement" })
    }

    const handleIncrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputValue) })
    }

    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: Number(inputValue) })
    }


    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <br />
            <br />
            <br />
            <div>
                <input type="number" value={inputValue} onChange={(e => setInputValue(e.target.value))} />
                <br />
                <br />
                <button onClick={handleIncrementByAmount}>Add</button>
                <button onClick={handleDecrementByAmount}>Remove</button>
            </div>

        </div>
    )
}

export default Counter
