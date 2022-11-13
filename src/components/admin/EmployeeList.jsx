import { ItemListEmployee } from "./";

export const EmployeeList = () => {
    return (
        <>
            <div className="mt-10">
                <div className="w-full flex items-center justify-between">
                    <h2 className="font-bold text-2xl">Mis empleados</h2>
                    <button className="btn-outline-primary">Añadir empleado</button>
                </div>
                
                <div className="py-4">
                    <ItemListEmployee />
                    <ItemListEmployee />
                    <ItemListEmployee />
                    <ItemListEmployee />
                </div>
            </div>
        </>
    )
}
