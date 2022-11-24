

export const CardEmployee = ({name, last_name, phone, email, identification}) => {
    const slice = `${name.slice(0, 1)}${last_name.slice(0, 1)}`;
    
    return (
        <div className="w-full border border-gray-100 shadow-md rounded-md flex p-5 items-center justify-between">
                <div className="flex items-center mr-5">
                    <span className="p-3 rounded-full w-12 h-12 text-center bg-blue-500 text-white font-bold">{slice}</span>
                    <div className="flex flex-col ml-4">
                        <h5 className="font-bold">{name} {last_name}</h5>
                        <p className="text-sm"><strong>Identificación</strong>: {identification}</p>
                    </div>
                </div>
                
                <div className="flex flex-col mr-5">
                    <p className="text-sm"><strong>Teléfono</strong>: {phone}</p>
                    <p className="text-sm"><strong>Correo electrónico</strong>: {email}</p>
                </div>

                <div className="flex">
                    <button className="color-primary py-2 px-3 rounded-md mr-4">
                        <i className="fa-solid fa-pen-to-square mr-2"></i>
                        Editar
                    </button>
                    <button className="color-alternative py-2 px-4 rounded-md">
                        <i className="fa-regular fa-trash-can mr-2"></i>
                        Eliminar
                    </button>
                </div>
            </div>
    )
}
