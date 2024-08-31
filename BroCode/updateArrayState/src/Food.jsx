import React, {useState} from 'react'

function Food() {

    const [foods, setFoods] = useState(["Mango", "Banana", "Kivi", "Apple"])

    function handleAddFood() {
        const newFood = document.getElementById("inputFood").value
        document.getElementById("inputFood").value = ""

        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>My Foods</h1>
            <ol>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ol>
            <input type="text" id='inputFood' placeholder='Enter Food Name'/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default Food