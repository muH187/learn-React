import UserGreeting from "./UserGreeting"

function App() {
  return(
   <>
      <UserGreeting isLoggedIn={true} username="Ali"/>
      <UserGreeting isLoggedIn={false} username="Mirza"/>
      <UserGreeting isLoggedIn={true}/>
   
   </>
  )
}

export default App
