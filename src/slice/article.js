import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: null,
    articleDetail: null,
    isLoading: false,
    isloaded: false,
    error: null,
}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true
        },
        succedLoading: (state, actions) => {
            state.isLoading = false
            state.articles = actions.payload
            state.isloaded = true
        },
        failLoading: (state, actions) => {
            state.isLoading = false
            state.isloaded = false
            state.error = actions.payload
        },
        // Create
        startCreate: (state) => {
            state.isLoading = true
        },
        succedCreate: (state, action) => {
            state.isLoading = false
            state.isloaded = true
            state.articles = action.payload
        },
        failCreate: (state, actions) => {
            state.isLoading = false
            state.isloaded = false
            state.error = actions.payload
        },
    }
})

export const { startLoading, succedLoading, failLoading, startCreate, succedCreate, failCreate } = articleSlice.actions
export default articleSlice.reducer