import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeFilter: "Madrid",
    cities: ["Madrid", "Moscow", "Novosibirsk", "Irkutsk"]
}

const citiesSlice = createSlice({
    name: "cities", 
    initialState, 
    reducers: {
        filterActive: (state, action) => { state.activeFilter = action.payload }
    }
});

const { actions, reducer } = citiesSlice;

export default reducer;
export const { 
    filterActive
} = actions;