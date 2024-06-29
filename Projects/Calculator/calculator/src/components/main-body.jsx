import styles from "./main-body.module.css";
import Item from "./Item";
const MainBody = ({ items, EventHandler }) => {
  return (
    <div className={styles.input - items}>
      {items.map((item) => {
        return <Item EventHandler={EventHandler} item={item}></Item>;
      })}
    </div>
  );
};
export default MainBody;
