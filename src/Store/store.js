import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./Slices/basketSlice";
import userSlice from "./Slices/userSlice";
import likesSlice from "./Slices/likesSlice";

const store = configureStore({
    reducer: {
        basket: basketSlice,
        user: userSlice.reducer,
        likes: likesSlice.reducer
    }
})

export default store;