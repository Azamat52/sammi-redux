import { createSlice } from "@reduxjs/toolkit";
import Registar from './../components/auth/Registar';

const initialState = {
    articles: null,
    isLoading: false,
    isloaded: false,
    error: null,
}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers:{
        startLoading: (state) => {
            state.isLoading = true
        },
        succedLoading: (state) => {
            state.isLoading = false
            state.isloaded = true
        },
        failLoading : (state, actions) => {
            state.isLoading = false 
            state.isloaded = false
            state.error = actions.payload
        },
        // Create
        startCreate: (state) => {
            state.isLoading = true
        },
        succedCreate: (state) => {
            state.isLoading = false
            state.isloaded = true
        },
        failCreate: (state, actions) => {
            state.isLoading = false 
            state.isloaded = false
            state.error = actions.payload
        },
    }
})

export const {startLoading, succedLoading, failLoading, startCreate, succedCreate, failCreate} = articleSlice.actions
export default articleSlice.reducer