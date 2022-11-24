import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onCheckCompany } from "../../../store/company"
import { CardCompany, ModalCompany, NotCompany, NotServices } from "../../../components/admin";
import { useModal } from "../../../hooks";
import { onActivatingService, onCheckServices, onDeleteService } from "../../../store/services";

export const Establishment = () => {

    const dispatch = useDispatch()
    const { hasCompany } = useSelector(state => state.company);
    const { hasServices, services } = useSelector(state => state.service);
    const { openModal } = useModal();

    const onOpenModal = () => {
        openModal('services');
    }

    const handleEditService = (service) => {
        onOpenModal();
        dispatch(onActivatingService(service));
    }

    const handleDeleteService = (id) => {
        dispatch(onDeleteService(id));
    }

    useEffect(() => {
        dispatch(onCheckCompany())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch(onCheckServices())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasCompany])

    if(hasCompany === 'not_company') {
        return (
            <>
                <div className="mb-5">
                    <h1 className="font-bold text-4xl mb-7">Mi negocio</h1>
                    <p>Para poder agregar citas a tu calendario, debes completar la información de tu negocio. En caso de no tener un establecimiento fisico, especifica en la dirección “A domicilio”.</p>
                </div>
                <NotCompany />
                <ModalCompany />
            </>
        )
    }

    if(hasCompany === 'has_company' && hasServices === 'not_services') {
        return (
            <>
                <div className="mb-5">
                    <h1 className="font-bold text-4xl mb-7">Mi negocio</h1>
                    <p>Para poder agregar citas a tu calendario, debes completar la información de tu negocio. En caso de no tener un establecimiento fisico, especifica en la dirección “A domicilio”.</p>
                </div>
                <CardCompany />
                <div className="mt-12">
                    <h2 className="font-bold text-xl mb-3">Servicios</h2>
                    <p>Agrega los servicios que prestas en tu establecimiento o como domiciliario.</p>
                </div>
                <NotServices />
                <ModalCompany />
            </>
        )
    }

    return (
        <>
            <div className="mb-5">
                <h1 className="font-bold text-4xl mb-7">Mi negocio</h1>
                <p>Para poder agregar citas a tu calendario, debes completar la información de tu negocio. En caso de no tener un establecimiento fisico, especifica en la dirección “A domicilio”.</p>
            </div>
            <CardCompany />
            <div className="mt-12">
                <h2 className="font-bold text-xl mb-3">Servicios</h2>
                <p>Agrega los servicios que prestas en tu establecimiento o como domiciliario.</p>
            </div>

            <div className="my-4">
                <table className="w-full">
                    <thead className="border-b border-gray-200">
                        <tr>
                            <th className="text-left bg-slate-200 px-4 py-2">Nombre</th>
                            <th className="text-left bg-slate-200 px-4 py-2">Descripción</th>
                            <th className="text-left bg-slate-200 px-4 py-2">Precio</th>
                            <th className="text-left bg-slate-200 px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map( service => (
                                <tr key={service._id} className="border-b border-gray-200">
                                    <td className="border-x border-gray-100 py-2 px-4">{service.name_service}</td>
                                    <td className="border-r border-gray-100 py-2 px-4">{service.description}</td>
                                    <td className="border-r border-gray-100 py-2 px-4">{service.price}</td>
                                    <td>
                                    <button className="color-primary py-2 px-3 rounded-md mr-4" onClick={ () => handleEditService(service) }>
                                        <i className="fa-solid fa-pen-to-square mr-2"></i>
                                        Editar
                                    </button>
                                    <button className="color-alternative py-2 px-4 rounded-md" onClick={ () => handleDeleteService(service._id) }>
                                        <i className="fa-regular fa-trash-can mr-2"></i>
                                        Eliminar
                                    </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <button className='btn-outline-primary block mt-5 mx-auto' onClick={onOpenModal}>
                    <i className="fa-solid fa-plus mr-3"></i>
                    Crear servicios
                </button>
            </div>

            <ModalCompany />
        </>
    )
}

