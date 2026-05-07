import { createSlice } from "@reduxjs/toolkit";
import Registar from './../components/auth/Registar';

const initialState = {
    // Login
    users: null,
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
            state.users = action.payload
            state.isRegistar = true
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
        succesRegistar: (state, action) => {
            state.isRegistar = false
            state.registared = true
            state.error = null
        },
        failedRegistar: (state, action) => {
            state.isRegistar = false
            state.registared = false
            state.error = action.payload
        }
    }
})

export const {startLogin, succesLogin, failedLogin, startRegistar, succesRegistar, failedRegistar} = authSlice.actions
export default authSlice.reducer