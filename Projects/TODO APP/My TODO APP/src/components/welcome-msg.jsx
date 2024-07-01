import { TodoItemsContext } from "../store/TodoItemsStore.jsx";
import { useContext } from "react";


const Welcome=()=>{
  const {ToDoItems}=useContext(TodoItemsContext);
  const sz=ToDoItems.length;
  if(!sz)return  <p>Enjoy ur Day</p>;
  return "";
}

export default Welcome;