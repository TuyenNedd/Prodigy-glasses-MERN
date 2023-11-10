import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slides/useSlide";



export const store = configureStore({
     reducer :{
    user : userReducer
     }
});
