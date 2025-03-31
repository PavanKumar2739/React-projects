import {createSlice}  from "@reduxjs/toolkit"

const initialState ={
    showChat : false,
}

const pageSlice = createSlice({
    name:'page',
    initialState,
    reducers:{
        setShowChat:(state,action)=>{
            state.showChat = action.payload;
        }

    }
});

export const {setShowChat} = pageSlice.actions;

export default pageSlice.reducer;

