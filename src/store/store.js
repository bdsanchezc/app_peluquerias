import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { companySlice } from './company';
import { employeeSlice } from "./employee";
import { serviceSlice } from './services';
import { modalSlice } from './ui';

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        company: companySlice.reducer,
        service: serviceSlice.reducer,
        employee: employeeSlice.reducer,
        modal: modalSlice.reducer
    }
})