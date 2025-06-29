import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productSlice } from './services/productSlice';
import { categorySlice } from './services/categorySlice';
import cartReducer from './slices/cartSlice';
import { orderApi } from './services/orderSlice';

console.log('Store - Initializing with slices:', {
  productSlice: productSlice.reducerPath,
  categorySlice: categorySlice.reducerPath
});

const persistConfig = {
    key: 'real_money_admin',
    storage,
    whitelist: ['counter', 'userSlice', 'cart'], // what to persist
};

const rootReducer = combineReducers({
    [productSlice.reducerPath]: productSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            productSlice.middleware,
            categorySlice.middleware,
            orderApi.middleware
        ),
});

console.log('Store - Configured with state:', store.getState());

setupListeners(store.dispatch);

export const persistor = persistStore(store);
