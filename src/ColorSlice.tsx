import { createSlice } from "@reduxjs/toolkit";

interface ColorState {
    text : string;
}
const initialState:ColorState ={
    text : "blue"
}

export const ColorSlice = createSlice({
    name : 'string',
    initialState,
    reducers: {
        setString: (state,action) =>{
            state.text = action.payload; //atualiza a string
        },
    },
})

export const { setString } = ColorSlice.actions;
export default ColorSlice.reducer;