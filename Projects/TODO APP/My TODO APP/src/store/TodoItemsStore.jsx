import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  ToDoItems: [],
  AddBehaviour: () => {},
  Remove: () => {},
});

export const TodoItemsContextProvider = ({ children }) => {
  const ToDoItemsReducer = (currTododItems, action) => {
    let newTodoItems = currTododItems;
    if (action.type === "ADD_ITEM") {
      newTodoItems = [
        ...currTododItems,
        { work: action.payload.TodoItemName, dueDate: action.payload.DueDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTododItems.filter((item) => {
        return item !== action.payload.TodoItem;
      });
    }
    return newTodoItems;
  };
  let [ToDoItems, dispatchToDoItems] = useReducer(ToDoItemsReducer, [
    { work: "Go to Library", dueDate: "25/02/2024" },
  ]);

  const AddBehaviour = (TodoItemName, DueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        TodoItemName,
        DueDate,
      },
    };
    dispatchToDoItems(newItemAction);
  };

  const Remove = (TodoItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        TodoItem,
      },
    };
    dispatchToDoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        ToDoItems,
        AddBehaviour,
        Remove,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
