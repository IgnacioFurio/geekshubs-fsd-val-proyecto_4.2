import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userCredentials: {}
        },
        reducers: {
        login: (state, action) => {
            return {
            ...state,
            ...action.payload
            }
        },
        userout: (state, action) => {
            return {
            ...state,
            ...action.payload
            }
        }
        
        }
        
});

//export actions
export const { login, userout } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;