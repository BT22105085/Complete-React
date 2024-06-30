import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

const Input = ({ EventHandler }) => {
  const TodoName = useRef();
  const DueDate = useRef();
  const finalHandler = (event) => {
    if (!TodoName.current.value || !DueDate.current.valueOf) return;
    event.preventDefault();
    EventHandler(TodoName.current.value, DueDate.current.value);
    TodoName.current.value="";
    DueDate.current.value="";
  };
  return (
    <form class="row" onSubmit={finalHandler}>
      <div class="col">
        <input
          type="text"
          placeholder="Enter your TODO Item here"
          ref={TodoName}
        />
      </div>
      <div class="col">
        <input type="date" ref={DueDate}></input>
      </div>
      <div class="col">
        <button class="btn btn-success">
          <IoIosAddCircle />
        </button>
      </div>
    </form>
  );
};
export default Input;
