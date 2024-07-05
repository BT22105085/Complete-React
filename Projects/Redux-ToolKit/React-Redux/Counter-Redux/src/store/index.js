import {configureStore, createSlice} from "@reduxjs/toolkit"
import { counterSlice } from "./counter";
import { toggleSlice } from "./toggle";

const counterStore = configureStore({reducer:{
  counter:counterSlice.reducer,
  toggle:toggleSlice.reducer,
}});


export default counterStore;



/*

const DEFAULT_STORE = { counter: 0,toggle:false, };

const counterReducer = (store = DEFAULT_STORE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store,counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store,counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    return { ...store,counter: store.counter + Number(action.payload.value) };
  } else if(action.type==="SUBTRACTION"){
    return { ...store,counter: store.counter - Number(action.payload.value) };
  } else if(action.type==="TOGGLE"){
    return {...store,toggle: !(store.toggle) }
  }
  return store;
};
*/
