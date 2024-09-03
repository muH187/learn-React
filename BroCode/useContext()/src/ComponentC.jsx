import ComponentD from "./ComponentD"

function ComponentC(){
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again`}</h2>
            <ComponentD/>
        </div>
    )
}

export default ComponentC