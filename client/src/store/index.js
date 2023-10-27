import {configureStore} from "@reduxjs/toolkit";
import {tickersReducer} from "./slices/tickersSlice";


const store = configureStore({
    reducer: tickersReducer
})


export {store};


