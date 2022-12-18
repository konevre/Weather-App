import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCity: "Novosibirsk"
}

const weatherSlice = createSlice({
    name: "weather", 
    initialState, 
    reducers: {
        makeActive: (state, action) => { state.activeCity = action.payload }
    }
});

const { actions, reducer } = weatherSlice;

export default reducer;
export const { 
    makeActive
} = actions;