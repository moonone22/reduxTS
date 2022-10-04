import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./reduce/reducer";




const store = configureStore({
    reducer:{
        state1:stateSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store