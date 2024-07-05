import {createSlice} from "@reduxjs/toolkit"

export const toggleSlice=createSlice({
  name:"toggle",
  initialState:false,
  reducers:{
    Toggle:(state)=>{
      return !state;
    }
  },
});

export const toggleAction=toggleSlice.actions;