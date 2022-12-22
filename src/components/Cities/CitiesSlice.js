import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const citiesAdapter = createEntityAdapter();


// const initialState = citiesAdapter.getInitialState({
//     activeFilter: "Madrid",
// })

const emptyInitialState = citiesAdapter.getInitialState({activeFilter: "Madrid"});
const items = [
    {
        id: 1,
        name: "Bari"
    },
    {
        id: 3,
        name: "Moscow"
    }
]
const initialState = citiesAdapter.upsertMany(emptyInitialState, items);

const citiesSlice = createSlice({
    name: "cities", 
    initialState, 
    reducers: {
        filterActive: (state, action) => { state.activeFilter = action.payload },
        addCity: (state, action) => { citiesAdapter.addOne(state, action.payload) },
    }
});

const { actions, reducer } = citiesSlice;

export default reducer;

export const citiesSelector = citiesAdapter.getSelectors(state => state.cities).selectAll;

export const { 
    filterActive,
    addCity
} = actions;