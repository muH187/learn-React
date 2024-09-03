import React, {useState, useEffect, useRef} from 'react'

function MyComponent() {

    // const [number, setNumber] = useState(0)
    // const ref = useRef(0)

    const inputRef = useRef(null)

    function handleClick() {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "grey"
    }

    return(
        <>
        <button onClick={handleClick}>Click Me!</button>
        <input type="text" ref={inputRef}/>
        </>
    )
}

export default MyComponent