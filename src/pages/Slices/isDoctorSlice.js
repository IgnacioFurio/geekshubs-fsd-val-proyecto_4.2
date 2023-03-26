import { createSlice } from '@reduxjs/toolkit';

export const isDoctorSlice = createSlice({
    name: 'doctor',
    initialState: {
        isDoctor: {}
        },
        reducers: {
        doctorIn: (state, action) => {
            return {
            ...state,
            ...action.payload
            }
        },
        doctorOut: (state, action) => {
            return {
            ...state,
            ...action.payload
            }
        }
    }        
});

//export actions
export const { doctorIn, doctorOut } = isDoctorSlice.actions;

export const doctorData = (state) => state.doctor;

export default isDoctorSlice.reducer;