import { createSlice } from "@reduxjs/toolkit";

interface PartsState {
    previos:string,  //anterior
    colorHead: string,
    colorEye: string,
}
const initialState: PartsState ={
    previos:"Head",  //anterior
    colorHead: "blue",
    colorEye: "blue",
}

export const StatusSlice = createSlice({
    name : 'string',
    initialState,
    reducers: {
        setStatus: (state,action) =>{
            state.previos = action.payload; //atualiza a string
            state.colorHead = action.payload; //atualiza a string
            state.colorEye = action.payload; //atualiza a string
        },
    },
})

export const { setStatus } = StatusSlice.actions;
export default StatusSlice.reducer;