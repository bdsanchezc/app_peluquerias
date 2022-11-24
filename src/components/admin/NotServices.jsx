import { useModal } from '../../hooks'

export const NotServices = () => {

    const { openModal } = useModal();

    const onOpenModal = () => {
        openModal('services');
    }

    return (
        <>
            <div className="mt-8 text-center bg-gray-100 p-6 border border-gray-200 rounded-md">
                <span className='block mb-4'>El usuario no posee ningún servicio registrado.</span>

                <button className='btn-outline-primary' onClick={onOpenModal}>
                    <i className="fa-solid fa-plus mr-3"></i>
                    Crear servicios
                </button>
            </div>
        </>
    )
}
