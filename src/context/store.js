import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import FollowSlice from './slice/followSlice'


export const store = configureStore({
    reducer: {
        user: userSlice,
        follow: FollowSlice,
    },
})