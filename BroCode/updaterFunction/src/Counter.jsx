import React, {useState} from 'react'

function Counter() {
    
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(c => c + 1)
    }

    const reset = () => {
        setCounter(c => 0)
    }

    const decrement = () => {
        setCounter(c => c - 1)
    }


    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter