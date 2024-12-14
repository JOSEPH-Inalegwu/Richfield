import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage for persistence
import cartReducer from './features/cart/cartSlice'; // Adjust path as needed

// Redux Persist configuration
const persistConfig = {
    key: 'cart', // Key to store the cart state in localStorage
    storage, // Storage engine (localStorage)
};

// Persist the cart reducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
    reducer: {
        cart: persistedCartReducer, // Use persisted reducer for cart
    },
});

// Create a persistor
export const persistor = persistStore(store);

