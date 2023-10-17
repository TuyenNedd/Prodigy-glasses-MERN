import accountSlice from "./account/accountSlice";
import { configureStore } from "@reduxjs/toolkit"; 
export const store  = configureStore({
    reducer : {
        account :accountSlice 
    }
})