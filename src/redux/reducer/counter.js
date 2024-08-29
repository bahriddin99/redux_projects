import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/storage";

const initialState = loadState("counter") ||  {
count:0
}

export const  counterStore = createSlice({
name: "counter",
initialState,
reducers:{
    increment:(state,action)=>{
        return{...state, count:state.count+1}

    },
    decrement:(state,action)=>{
        return{...state, count:state.count-1}


    }
}
})


export default counterStore.reducer
export const {increment,decrement} = counterStore.actions