import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./ContactSlice"
export default configureStore({
    reducer:{
        contacts: ContactReducer
    }
})