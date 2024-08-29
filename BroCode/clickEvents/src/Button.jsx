

function Button() {

    // let count = 0
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++
    //         console.log(`${name} you clicked me ${count} time/s.`)
    //     } else {
    //         console.log(`${name} stop clicking me!`)
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "Oouch"
    return(
        <>
            {/* <button onClick={() => handleClick("Ali")}>Click me</button> */}
            {/* <button onClick={() => handleClick2("Ali")}>Click me Ali</button> */}
            <button onClick={(e) => handleClick(e)}>Click me</button>

        </>
    )
}

export default Button