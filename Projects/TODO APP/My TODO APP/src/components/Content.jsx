import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsStore.jsx";
import { useContext } from "react";

const Content = () => {
  const {ToDoItems,Remove}=useContext(TodoItemsContext);
  return <>
    {ToDoItems.map((item)=>{
      return <div class="row" key={item.work}>
      <div class="col" key={TextMetrics.work}>
        <p>{item.work}</p>
      </div>
      <div class="col" key={item.dueDate}>
        <p>{item.dueDate}</p>
      </div>
      <div class="col">
        <button type="button" class="btn btn-danger"
        onClick={()=>Remove(item)}>
          <MdDelete />
        </button>
      </div>
    </div>
    })}
  </>
};

export default Content;
