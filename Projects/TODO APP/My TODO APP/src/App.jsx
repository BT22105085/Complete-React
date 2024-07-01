import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Input from "./components/Input.jsx";
import Content from "./components/Content.jsx";
import { TodoItemsContext } from "./store/TodoItemsStore.jsx";

function App() {
  let [ToDoItems, SetToDoItems] = useState([
    { work: "Go to Library", dueDate: "25/02/2024" },
  ]);

  const AddBehaviour = (first, second) => {
    SetToDoItems((currValue)=> [...currValue, { work: first, dueDate: second }]);
  };

  const Remove=(item)=>{
    SetToDoItems((currValue)=>currValue.filter((element)=> element!==item));
  } 
  return (
    <>
      <center>
        <h1>TODO APP</h1>
        <TodoItemsContext.Provider value={{
          ToDoItems,
          AddBehaviour,
          Remove,
        }}>
      <Input></Input>
      {ToDoItems.length===0&& <p>Enjoy ur Day</p>}
      <Content></Content>
      </TodoItemsContext.Provider>
      </center>
    </>
  );
}

export default App;
