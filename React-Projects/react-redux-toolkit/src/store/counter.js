import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        counterVal : 0,
    },
    reducers:{
        //by default we need to use state
        //need to assign default to state by default it will take to initialSate
        increment:(state)=>{ 
            state.counterVal++;
        },
        decrement:(state)=>{// where there is no need of actions no need to use
            state.counterVal--;
        },
        add:(state,action)=>{
           state.counterVal+=Number(action.payload);
        },
        subtract:(state,action)=>{
            state.counterVal-=Number(action.payload);
        }


    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;