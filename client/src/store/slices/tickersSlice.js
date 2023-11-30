import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    tickers: [],
    isTickerOn: true,
}

const tickersSlice = createSlice({
    name: "tickers",
    initialState: initialState,
    reducers: {
        updateTickers: (state, action) => {
            state.tickers = action.payload;
        },
        turnTickers: (state, action) => {
            state.isTickerOn = action.payload;
        }
    }
});


export const {updateTickers, turnTickers} = tickersSlice.actions;
export const tickersReducer = tickersSlice.reducer;
