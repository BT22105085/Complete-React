import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Input from "./components/Input.jsx";
import Content from "./components/Content.jsx";

function App() {
  let [ToDoItems, SetToDoItems] = useState([
    { work: "Go to Library", dueDate: "25/02/2024" },
  ]);
  const AddBehaviour = (first, second) => {
    let NewToDoItems = [...ToDoItems, { work: first, dueDate: second }];
    SetToDoItems(NewToDoItems);
    console.log(first,second);
  };
  const Remove=(item)=>{
    let NewToDoItems=[];
    ToDoItems.forEach((element)=>{
      if(element!==item){
        NewToDoItems.push(element);
      }
    });
    SetToDoItems(NewToDoItems);
  }
  return (
    <>
      <center>
        <h1>TODO APP</h1>
      <Input EventHandler={AddBehaviour}></Input>
      {ToDoItems.length===0&& <p>Enjoy ur Day</p>}
      <Content items={ToDoItems} EventHandler={Remove}></Content>
      </center>
    </>
  );
}

export default App;
