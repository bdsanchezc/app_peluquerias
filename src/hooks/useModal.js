import { useDispatch, useSelector } from "react-redux"
import { onCloseModal, onOpenModal } from "../store/ui";

export const useModal = () => {
    
    const dispatch = useDispatch();
    const { isModalOpen, typeForm } = useSelector(state => state.modal);

    const openModal = (typeForm) => {
        dispatch(onOpenModal(typeForm));
    }

    const closeModal = () => {
        dispatch(onCloseModal());
    }

    return { isModalOpen, typeForm, openModal, closeModal}
}
