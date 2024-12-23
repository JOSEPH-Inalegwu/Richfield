import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array to store cart items
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if item already exists
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            // Remove item from cart by ID
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            // Clear all items in the cart
            state.items = [];
        },
        incrementQuantity: (state, action) => {
            // console.log('Incrementing quantity for item ID:', action.payload);
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            // console.log('Decrementing quantity for item ID:', action.payload);
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },        
    },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
