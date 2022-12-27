import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeFilter: "Madrid",
    cities: ["Madrid", "Moscow", "Bari", "Novosibirsk"],
    coords: []
}
// [40.4165, -3.7026], [55.7522, 37.6156], [55.0411, 82.9344], [41.1177, 16.8512]

const citiesSlice = createSlice({
    name: "cities", 
    initialState, 
    reducers: {
        filterActive: (state, action) => { state.activeFilter = action.payload },
        addCity: (state, action) => { state.cities.push(action.payload) },
        deleteCity: (state, action) => { 
            state.cities = state.cities.filter(item => item !== action.payload) 
        },
        updateCities: (state, action) => { state.cities = action.payload },
        addCoords: (state, action) => { state.coords.push(action.payload) },

    }
});

const { actions, reducer } = citiesSlice;

export default reducer;

export const { 
    filterActive,
    addCity,
    deleteCity,
    updateCities,
    addCoords
} = actions;