import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth-slice" 

export default configureStore({
    reducer: {
        authReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})