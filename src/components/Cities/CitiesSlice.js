import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeFilter: "Madrid",
    cities: ["Madrid", "Moscow", "Bari", "Novosibirsk"]
}

const citiesSlice = createSlice({
    name: "cities", 
    initialState, 
    reducers: {
        filterActive: (state, action) => { state.activeFilter = action.payload },
        addCity: (state, action) => { state.cities.push(action.payload) },
        deleteCity: (state, action) => { state.cities = state.cities.filter(item => item !== action.payload) }
    }
});

const { actions, reducer } = citiesSlice;

export default reducer;

export const { 
    filterActive,
    addCity,
    deleteCity
} = actions;