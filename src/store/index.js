import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice"; 
import weather from "../components/Weather/weatherSlice";
import cities from "../components/Cities/CitiesSlice";
import settings from "../components/Settings/SettingsSlice";


const store = configureStore({
    reducer: { weather, cities, settings, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;

console.log(store.getState());