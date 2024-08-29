import List from "./List"

function App() {

  const fruits = [{id: 1, name: "Mango", calories: 102}, 
    {id: 2, name: "Banana", calories: 92},
    {id: 3, name: "Kivi", calories: 74}, 
    {id: 4, name: "Orange", calories: 84}, 
    {id: 5, name: "Watermelon", calories: 109}]

  const vegetables = [{id: 6, name: "Potatoe", calories: 102}, 
    {id: 7, name: "Tomatoe", calories: 92},
    {id: 8, name: "Onion", calories: 74}, 
    {id: 9, name: "Carrot", calories: 84}, 
    {id: 10, name: "Cerely", calories: 109}]


  return(
   <>
      {fruits.length != "" && <List items={fruits} category="Fruits"/>}
      <List items={vegetables} category="Vegetables" />
   
   </>
  )
}

export default App
