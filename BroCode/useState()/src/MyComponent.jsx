import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Ali")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }
    const reset = () => {
        setAge(0)
    }
    const decrementAge = () => {
        setAge(age - 1)
    }

    const isEmployedToggle = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrementAge}>Decrement Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={isEmployedToggle}>Toggle Status</button>
        </div>
    )
}

export default MyComponent