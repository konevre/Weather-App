import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../../utils/utils";

const activeCity = getLocalStorage("city", "Novosibirsk");

const initialState = {
    activeCity,
}

const weatherSlice = createSlice({
    name: "weather", 
    initialState, 
    reducers: {
        makeActive: (state, action) => { 
            state.activeCity = action.payload 
            setLocalStorage("city", action.payload )
        }
    }
});

const { actions, reducer } = weatherSlice;

export default reducer;
export const { 
    makeActive
} = actions;