import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
    IsLoading: false,
    Islogged: false,
    isSucced: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        startLogin: (state) => {
            state.IsLoading = true
        }
    }
})

export const {startLogin} = authSlice.actions
export default authSlice.reducer