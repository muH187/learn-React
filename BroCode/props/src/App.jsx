import Student from "./Student"

function App() {
  return(
   <>
      <Student name="Ali" age={20} networth="23.5 Million Dollars" isStudent={true}/>
      <Student name="Mirza" age={20} networth="17.9 Million Dollars" isStudent={false}/>
      <Student name="Umer" age={15} networth="8.3 Million Dollars" isStudent={true}/>
      <Student name="Wali" age={16} networth="11.2 Million Dollars" isStudent={true}/>
      <Student name="Uncle"/>
   
   </>
  )
}

export default App
