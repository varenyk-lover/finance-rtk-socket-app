import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tickers: []
}

const tickersSlice = createSlice({
    name: 'tickers',
    initialState: initialState,
    reducers: {
        updateTickers: (state, {payload}) => {
            state.tickers = payload;
        }
    }
});

export const tickersSelector = {
    getTickers: (state) => state.tickers,
}

export const {updateTickers} = tickersSlice.actions;
export const tickersReducer = tickersSlice.reducer;
