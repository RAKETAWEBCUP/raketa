import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

import currentUserSlice from "../features/currentUser.slice";
import historyReducer from '../features/historyPredicat.slice'
import forumReducer from '../features/forum.slice'

const persistConfig = {
    key: 'root',
    storage,
}
const presistedReducer = persistReducer(persistConfig, currentUserSlice)

export const store = configureStore({
    reducer: {
        current_user: presistedReducer,
        histories: historyReducer,
        forum:forumReducer
    },
    middleware: [thunk]
})

export const persistor = persistStore(store)