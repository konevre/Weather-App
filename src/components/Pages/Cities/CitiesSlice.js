import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../../utils/utils";

const activeFilter = getLocalStorage("activeFilter", "Madrid");
const cities = getLocalStorage("cities", ["Madrid", "Moscow", "Bari", "Novosibirsk"]);

const initialState = {
    activeFilter,
    cities,
}

const citiesSlice = createSlice({
    name: "cities", 
    initialState, 
    reducers: {
        filterActive: (state, action) => { 
            state.activeFilter = action.payload 
            setLocalStorage("activeFilter", action.payload)
        },
        addCity: (state, action) => { 
            if (!state.cities.includes(action.payload)) {
                setLocalStorage("cities",  [...state.cities, action.payload])
            }
            state.cities.push(action.payload) 
            
        },
        deleteCity: (state, action) => { 
            state.cities = state.cities.filter(item => item !== action.payload) 
            setLocalStorage("cities",  state.cities.filter(item => item !== action.payload))
        },
        updateCities: (state, action) => { 
            state.cities = action.payload 
            setLocalStorage("cities", action.payload)
        },
    }
});

const { actions, reducer } = citiesSlice;

export default reducer;

export const { 
    filterActive,
    addCity,
    deleteCity,
    updateCities,
} = actions;