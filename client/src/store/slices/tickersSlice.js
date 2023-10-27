import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    tickers: [],
    isTickerOn: true,
}

const tickersSlice = createSlice({
    name: "tickers",
    initialState: initialState,
    reducers: {
        updateTickers: (state, {payload}) => {
            state.tickers = payload;
        },
        turnTickers: (state, {payload}) => {
            state.isTickerOn = payload;
        }
    }
});


export const {updateTickers, turnTickers} = tickersSlice.actions;
export const tickersReducer = tickersSlice.reducer;
