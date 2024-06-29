import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import UlList from "./components/UlList.jsx"
import Container from "./components/Container.jsx";
import Input from "./components/Input.jsx";
import { useState } from "react";

function App(item) {
  let [items,setitems] = useState([
    "mango",
    "litchi",
    "salad",
    "roti",
    "ladyfinger",
    "nuts",
    "fruits",    
  ]);
  const EventHandler=(event)=>{
    if(event.key==="Enter"){
      let newItems=[...items,event.target.value];
      setitems(newItems);
      event.target.value="";
    }
  }
  
  return (
    <Container>
    <h1 className="heading">Healthy Foods</h1>
    <Input EventHandler={EventHandler}></Input>
    <UlList items={items} ></UlList>
    </Container>
  )
}

export default App
