

export const CardService = ({name, price, description}) => {
    return (
        <>
            <div className="w-full border border-gray-100 shadow-md rounded-md flex p-5 items-center justify-between">
                <div className="flex flex-col mr-5">
                    <h5 className="font-bold">Nombre servicio</h5>
                    <p className="text-sm">{name}</p>
                </div>
                <div className="flex flex-col mr-5">
                    <h5 className="font-bold">Precio</h5>
                    <p className="text-sm">$ {price}</p>
                </div>
                <div className="flex flex-col mr-5">
                    <h5 className="font-bold">Descripcion</h5>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </>
    )
}
