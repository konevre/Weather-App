import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice"; 
import weather from "../components/Weather/weatherSlice";


const store = configureStore({
    reducer: { weather, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;
