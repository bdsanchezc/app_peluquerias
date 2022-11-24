import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalOpen: false,
        typeForm: undefined,
    },
    reducers: {
        onOpenModal: (state, {payload}) => {
            state.isModalOpen = true;
            state.typeForm = payload;
        },
        onCloseModal: (state) => {
            state.isModalOpen = false;
            state.typeForm = undefined;
        }
    }
});

export const { onCloseModal, onOpenModal } = modalSlice.actions;