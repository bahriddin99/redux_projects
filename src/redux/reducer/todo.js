import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/storage";
const initialState = loadState("todo") || {
task:[],
}


const todoReducer = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add: (state,action)=>{
            return {...state, task:[...state.task, action.payload]}
        },
        deletTask:(state,action)=>{
            return {...state, task:state.task.filter((obj)=> obj.id !== action.payload.id)}
        },
        editTask:(state,action)=>{
            return {...state, task:state.task.map((item)=> item.id === action.payload.id ? action.payload: item)}

        }
    }
})

export default todoReducer.reducer
export const {add,deletTask,editTask}  = todoReducer.actions