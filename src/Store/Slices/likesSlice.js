import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likedItems: [],
}

const likesSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
        likeItem(state, action) {

        },
        dislikeItem(state, action) {

        }
    }
})

// export const { likeItem, dislikeItem } = likesSlice.actions;

export default likesSlice