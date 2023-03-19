import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../pages/Slices/userSlice";


export default configureStore({
    reducer: {
        user: userSlice
    }
    
});