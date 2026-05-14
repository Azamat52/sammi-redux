import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../services/LocalStorage";

const initialState = {
    // Login
    user: null,
    isLoading: false,
    loggedIn: false,
    error: null,
    // Registar
    isRegistar: false,
    registared: false,
    
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        // Login
        startLogin: (state) => {
            state.isLoading = true
            state.registared = true
        },
        succesLogin: (state, action) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload            
            setItem("token", action.payload.token)
            state.isRegistar = false
            state.registared = true
            state.error = null
        },
        failedLogin: (state, action) => {
            state.isLoading = false
            state.loggedIn = false 
            state.error = action.payload
        },
        // Registar        
        startRegistar: (state) => {
            state.isRegistar = true
        },
        succesRegistar: (state) => {
            state.isRegistar = false
            state.registared = true
            state.error = null
        },
        failedRegistar: (state, action) => {
            state.isRegistar = false
            state.registared = false
            state.error = action.payload
        },
        // Log Out
        UserLogOut: (state) => {            
            state.loggedIn = false
            state.user = null
            state.error = null
        },
    }
})

export const {startLogin, succesLogin, failedLogin, startRegistar, succesRegistar, failedRegistar, UserLogOut} = authSlice.actions
export default authSlice.reducer