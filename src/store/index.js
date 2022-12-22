import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice"; 
import weather from "../components/Weather/weatherSlice";
import cities from "../components/Cities/CitiesSlice";


const store = configureStore({
    reducer: { weather, cities, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;

// console.log(store.getState());