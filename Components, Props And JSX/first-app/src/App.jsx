import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar/>

      <div className="cards">
        <Card title="Title One" description="This is description One." />
        <Card title="Title Two" description="This is description Two." />
        <Card title="Title Three" description="This is description Three." />
        <Card title="Title Four" description="This is description Four." />
        
      </div>

      <Footer/>
    </>
  )
}

export default App
