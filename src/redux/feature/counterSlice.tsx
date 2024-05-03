import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {count:0} ;

const counterSlice = createSlice({

    name: 'counter', 
    initialState ,
    reducers:{
        increment:(state , action)=>{
            state.count = state.count + 1 
        } ,
        decrement:(state , action)=>{
            state.count = state.count - 1
        },
        IncrementByValue:(state , action:PayloadAction<number>)=>{
            state.count = state.count + action.payload
        }
    }

})


 export const {increment ,
    decrement ,
    IncrementByValue
}   = counterSlice.actions

export default counterSlice.reducer;