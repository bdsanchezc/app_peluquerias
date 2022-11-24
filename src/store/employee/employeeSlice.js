import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: { 
        hasEmployee: "not_employee",
        employees: [],
        employeeActive: null
    },
    reducers: {
        onLoadEmployee: (state, { payload }) => {
            state.hasEmployee = "has_employee";
            state.employees = payload;
            state.employeeActive = null;
        },
        onAddNewEmployee: (state, { payload }) => {
            state.hasEmployee = "has_employee";
            state.employees = [...state.employees, payload];
        },
        onClearEmployee: (state) => {
            state.hasEmployee = "not_employee";
            state.employees = [];
            state.employeeActive = null;
        },
        onActivateEmployee: (state, { payload }) => {
            state.employeeActive = payload;
        },
        onClearActivatedEmployee: (state) => {
            state.employeeActive = null
        }
    }
});

export const { onLoadEmployee, onAddNewEmployee, onClearEmployee, onActivateEmployee, onClearActivatedEmployee } = employeeSlice.actions;