import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    // total: 0,
    // numberOfProducts:0,
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
        },
        removeFromCart(state, action) {
            const newState = state

            const index = newState.items.findIndex((item) => item.id === action.payload.id);
            newState.items.splice(index, 1);

            state = newState
        }
    }
})

export const { addToCart, removeFromCart } = basketSlice.actions;

export default basketSlice.reducer