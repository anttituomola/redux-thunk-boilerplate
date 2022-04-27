import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "users",

    initialState: {
        users: [],
    },

    reducers: {
        hydrateUsers: (state, action) => {
            state.users = action.payload
        },
    }
})

export const { hydrateUsers } = userSlice.actions
export default userSlice.reducer
