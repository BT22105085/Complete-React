import styles from "./Item.module.css"

const Item=({item,EventHandler})=>{
  return <button className={styles.button} onClick={(event)=>EventHandler(event,item)} key={item} name={item}>
  {item}
</button>
}

export default Item;