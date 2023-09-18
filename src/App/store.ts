import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from '../Features/Auth/userSlice';

export const rootReducers = combineReducers({
    user: userSlice
});

const persistConfig = {
    key: 'root',
    version: 1,
    whitelist: ['user'],
    storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;