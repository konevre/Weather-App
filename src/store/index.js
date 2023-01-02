import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice"; 
import weather from "../components/Pages/Weather/weatherSlice";
import cities from "../components/Pages/Cities/CitiesSlice";
import settings from "../components/Pages/Settings/SettingsSlice";


const store = configureStore({
    reducer: { weather, cities, settings, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;