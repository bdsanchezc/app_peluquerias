import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../hooks";
import { onDeleteCompany } from "../../store/company";

export const CardCompany = () => {

    const dispatch = useDispatch();
    const { company } = useSelector( state => state.company );
    const { name_company, id_register, phone, address, start_time, end_time } = company;
    const { openModal } = useModal();

    const handleEdit = () => {
        openModal('company');
    }

    const handleDelete = () => {
        dispatch(onDeleteCompany( company._id ));
    }

    return (
        <>
            <div className="w-full border border-gray-100 shadow-md rounded-md flex p-5 items-center justify-between">
                <div className="flex flex-col mr-5">
                    <h5 className="font-bold">{name_company}</h5>
                    <p className="text-sm"><strong>ID Registro</strong>: {id_register}</p>
                </div>
                
                <div className="flex flex-col mr-5">
                    <p className="text-sm"><strong>Teléfono</strong>: {phone}</p>
                    <p className="text-sm"><strong>Dirección</strong>: {address}</p>
                </div>

                <div className="flex flex-col mr-5">
                    <p className="text-sm"><strong>Horarios de atención</strong></p>
                    <p className="text-sm">{`${start_time} - ${end_time}`}</p>
                </div>

                <div className="flex">
                    <button className="color-primary py-2 px-3 rounded-md mr-4" onClick={handleEdit}>
                        <i className="fa-solid fa-pen-to-square mr-2"></i>
                        Editar
                    </button>
                    <button className="color-alternative py-2 px-4 rounded-md" onClick={handleDelete}>
                        <i className="fa-regular fa-trash-can mr-2"></i>
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    )
}
