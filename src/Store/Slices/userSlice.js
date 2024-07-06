import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logInUser(state, action) {

        },
        logOutUser(state, action) {

        }
    }
})

// export const { logInUser, logOutUser } = userSlice.actions;

export default userSlice