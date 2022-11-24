import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({
    name: 'company',
    initialState: {
        hasCompany: 'not_company',
        company: {},
    },
    reducers: {
        onChecking: (state) => {
            state.hasCompany = 'checking';
            state.company = {};
        },
        onLoadCompany: (state, {payload}) => {
            state.hasCompany = 'has_company';
            state.company = payload;
        },
        onCreatedCompany: (state, {payload}) => {
            state.hasCompany = 'has_company';
            state.company = payload;
        },
        onClearCompany: (state) => {
            state.hasCompany = 'not_company';
            state.company = {};
        }
    }
});

export const { onChecking, onLoadCompany, onClearCompany, onCreatedCompany } = companySlice.actions;