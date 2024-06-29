// import  React from "react";
import { useState } from "react";
import Item from "./Item";

function UlList({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.length === 0 && <h3>Still bringing items</h3>}
        {items.map((item) => (
          <Item key={item} item={item}></Item>
        ))}
      </ul>
    </>
  );
}
export default UlList;
