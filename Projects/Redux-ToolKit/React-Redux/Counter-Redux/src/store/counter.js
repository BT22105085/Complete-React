import {createSlice} from "@reduxjs/toolkit"

export const counterSlice=createSlice({
  name:"counter",
  initialState:{counterVal:0},
  reducers:{
    increment:(state)=>{
      state.counterVal++;
    },
    decrement:(state)=>{
      state.counterVal--;
    },
    addition:(state,action)=>{
      state.counterVal+=Number(action.payload.num);
    },
    subtraction:(state,action)=>{
      state.counterVal-=Number(action.payload.num);
    },
  },
});

export const counterActions= counterSlice.actions;