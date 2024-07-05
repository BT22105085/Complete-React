import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const num = useRef("");
  const dispatch = useDispatch();
  const handleIncrement = () => {
    console.log("increase");
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAddition = () => {
    dispatch({ type: "ADDITION", payload: { value: num.current.value } });
    num.current.value="";
  };
  const handleSubtraction = () => {
    dispatch({
      type: "SUBTRACTION",
      payload: { value: num.current.value },
    });
    num.current.value = "";
  };
  const handleToggle=()=>{
    dispatch({ type: "TOGGLE",});
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleToggle}
        >
            Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pk-control-item">
        <input
          type="text"
          placeholder="Enter value"
          className="pk-input-item"
          ref={num}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddition}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
