import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../../utils/utils";

const activeTemp = getLocalStorage("temp", "Celcius");
const activeWind = getLocalStorage("wind", "km/h");
const activePressure = getLocalStorage("pressure", "hPa");
const activeDistance = getLocalStorage("distance", "Kilometers");
const hour12 = getLocalStorage("hour", true);

const initialState = {
    activeTemp,
    activeWind,
    activePressure,
    activeDistance,
    hour12, 
}

const weatherSlice = createSlice({
    name: "settings", 
    initialState, 
    reducers: {
        setTemp: (state, action) => { 
            state.activeTemp = action.payload;
            setLocalStorage("temp", action.payload)
        },
        setWind: (state, action) => { 
            state.activeWind = action.payload 
            setLocalStorage("wind", action.payload)
        },
        setPressure: (state, action) => { 
            state.activePressure = action.payload 
            setLocalStorage("pressure", action.payload)
        },
        setDistance: (state, action) => { 
            state.activeDistance = action.payload 
            setLocalStorage("distance", action.payload)
        },
        setHour12: (state) => { 
            state.hour12 = !state.hour12 
            setLocalStorage("hour", state.hour12)
        }
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