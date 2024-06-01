import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem("user")) || [],
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToUser: (state, action) => {
            state.value = [...state.value, action.payload]
            localStorage.setItem("user", JSON.stringify(state.value))
        },
        removeFormUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
            localStorage.setItem("user", JSON.stringify(state.value))
        }
    }
})

export const { addToUser, removeFormUser } = userSlice.actions
export default userSlice.reducer