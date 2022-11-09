import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'no_authenticated',
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: (state) => { state.status = 'checking' },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        }
    }
});

export const { onChecking, onLogin } = authSlice.actions;