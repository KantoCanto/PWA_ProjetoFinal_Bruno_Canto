import {createSlice} from "@reduxjs/toolkit";

export const appStateSloce = createSlice({
    name: "AppState",
    initialState: {
        appState: "",
    },
    reducers:{
        setAppState: (state, action) => {
            state.appState = action.payload
        }
    }
})

export const {
   setAppState
} = appStateSloce.actions

export default appStateSloce.reducer;