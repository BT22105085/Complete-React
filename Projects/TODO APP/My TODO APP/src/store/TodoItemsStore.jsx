import { createContext } from "react";

export const TodoItemsContext=createContext({
  ToDoItems:[],
  AddBehaviour:()=>{},
  Remove:()=>{},
});