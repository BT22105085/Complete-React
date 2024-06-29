import { useState } from "react";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  let [ActiveItem, SetActiveItem] = useState(false);
  const OnBuy = (item) => {
    if (!ActiveItem) {
      SetActiveItem(true);
    }
  };

  return <li
    className={`${styles["pk-group-item"]} list-group-item ${
      ActiveItem && "active"
    }`}
    key={item}
  >
    {item}
    <button
      type="button"
      className={`btn btn-success ${styles.btn}`}
      onClick={() => OnBuy(item)}
    >
      Buy
    </button>
  </li>;
};

export default Item;
