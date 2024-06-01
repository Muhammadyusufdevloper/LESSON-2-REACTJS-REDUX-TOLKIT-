import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value: JSON.parse(localStorage.getItem("follow")) || []
}
export const followSlice = createSlice({
    name: "follow",
    initialState,
    reducers: {
        followUser: (state, action) => {
            let index = state.value.findIndex(product => product.id === action.payload.id)
            if (index < 0) {
                state.value = [...state.value, action.payload]
            } else {
                state.value = state.value.filter(product => product.id !== action.payload.id)
            }
            localStorage.setItem("follow", JSON.stringify(state.value))
        }
    }
})

export const { followUser } = followSlice.actions
export default followSlice.reducer