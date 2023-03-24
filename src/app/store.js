import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../pages/Slices/userSlice";
import appointmentSlice from "../pages/Slices/appointmentSlice";
import selectDoctorSlice from "../pages/Slices/selectDoctorSlice";

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userSlice,
    appointment: appointmentSlice,
    doctorId: selectDoctorSlice
})

const persistConfig = {
    key: 'root',
    storage,
}
    
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});