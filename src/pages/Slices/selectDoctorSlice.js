import { createSlice } from '@reduxjs/toolkit';

export const selectDoctorSlice = createSlice({
    name: 'doctorId',
    initialState: {
        choosenDoctor: {}
        },
        reducers: {
        doctor: (state, action) => {
            return {
            ...state,
            ...action.payload
            }
        }
    }        
});

//export actions
export const { doctor } = selectDoctorSlice.actions;

export const doctorIdData = (state) => state.doctorId;

export default selectDoctorSlice.reducer;