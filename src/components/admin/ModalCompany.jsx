import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useModal } from "../../hooks";
import { onRemoveActivatedService } from "../../store/services";
import { FormCompany, FormServices, FormEmployee } from "./";



Modal.setAppElement("#root");

const customStyles = {
    content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export const ModalCompany = () => {

    const dispatch = useDispatch();
    const { isModalOpen, typeForm, closeModal } = useModal();

    const afterCloseModalService = () => {
        dispatch(onRemoveActivatedService());
    }

    if(typeForm === 'company') {
        return (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
            >
                <FormCompany />
            </Modal>
        )
    }

    if(typeForm === 'employee') {
        return (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
            >
                <FormEmployee />
            </Modal>
        )
    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
            onAfterClose={afterCloseModalService}
        >
            <FormServices />
        </Modal>
    )
}
