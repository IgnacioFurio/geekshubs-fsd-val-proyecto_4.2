import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
        choosenAppointment: {}
        },
        reducers: {
        modify: (state, action) => {
            return {
            ...state,
            ...action.payload
            }
        }
    }        
});

//export actions
export const { modify } = appointmentSlice.actions;

export const appointmentData = (state) => state.appointment;

export default appointmentSlice.reducer;