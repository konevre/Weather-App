import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTemp: "Celcius",
    activeWind: "km/h",
    activePressure: "hPa",
    activeDistance: "Kilometers",
    hour12: true
}

const weatherSlice = createSlice({
    name: "settings", 
    initialState, 
    reducers: {
        setTemp: (state, action) => { state.activeTemp = action.payload },
        setWind: (state, action) => { state.activeWind = action.payload },
        setPressure: (state, action) => { state.activePressure = action.payload },
        setDistance: (state, action) => { state.activeDistance = action.payload },
        setHour12: (state) => { state.hour12 = !state.hour12 }
    }
});

const { actions, reducer } = weatherSlice;

export default reducer;
export const { 
    setTemp,
    setWind,
    setPressure,
    setDistance,
    setHour12
} = actions;