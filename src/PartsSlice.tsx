import { createSlice } from "@reduxjs/toolkit";

interface PartsState {
    text : string;
}
const initialState: PartsState ={
    text : "Head"
}

export const PartsSlice = createSlice({
    name : 'string',
    initialState,
    reducers: {
        setParts: (state,action) =>{
            state.text = action.payload; //atualiza a string
        },
    },
})

export const { setParts } = PartsSlice.actions;
export default PartsSlice.reducer;