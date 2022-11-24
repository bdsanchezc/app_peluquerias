import { createSlice } from '@reduxjs/toolkit';

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        hasServices: 'not_services',
        services: [],
        serviceActive: null
    },
    reducers: {
        onChecking: (state) => {
            state.hasServices = 'checking';
            state.services = [];
            state.serviceActive = null;
        },
        onLoadServices: (state, {payload}) => {
            state.hasServices = 'has_services';
            state.services = payload;
            state.serviceActive = null;
        },
        onAddNewService: (state, {payload}) => {
            state.hasServices = 'has_services';
            state.services = [...state.services, payload];
        },
        onClearServices: (state) => {
            state.hasServices = 'not_services';
            state.services = [];
            state.serviceActive = null;
        },
        onActivateService: (state, {payload}) => {
            state.serviceActive = payload;
        },
        onClearActivatedService: (state) => {
            state.serviceActive = null
        }
    }
});

export const { onChecking, onClearServices, onLoadServices, onActivateService, onAddNewService, onClearActivatedService } = serviceSlice.actions;