import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import UlList from "./UlList.jsx"


function App() {
  let items = [
    "mango",
    "litchi",
    "salad",
    "roti",
    "ladyfinger",
    "nuts",
    "fruits",    
  ];
  return (
    <>
    <h1 className="heading">Healthy Foods</h1>
    <UlList items={items}></UlList>
    </>
  )
}

export default App
