// import  React from "react";
import styles from "./UlList.module.css";

function UlList(props) {
  console.log(styles);
  return (
    <>
      <ul className="list-group">
        {props.items.length === 0 && <h3>Still bringing items</h3>}
        {props.items.map((item) => (
          <li
            className={`${styles["pk-group-item"]} list-group-item`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul> 
    </>
  );
}
export default UlList;
