import { createSlice } from '@reduxjs/toolkit';

export const patientSlice = createSlice({
    name: 'patient',
    initialState: {
        patientData: {}
        },
        reducers: {
        showPatient: (state, action) => {
            return {
            ...state,
            ...action.payload
            }
        }
        
    }
    
});

//exporto las ACCIONES.....
export const { showPatient } = patientSlice.actions;

export const patientData = (state) => state.patient;

export default patientSlice.reducer;