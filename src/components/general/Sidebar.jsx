import React from 'react'
import { ItemMenu } from '../menu/ItemMenu'

export const Sidebar = () => {
    return (
        <div className='w-1/3 max-w-xs h-full bg-white py-5 shadow-lg'>

            <div className="px-10 pb-9 pt-5">
                <img src="/logo.svg" alt="Logo peluapp" width={120}/>
                <div className="border-b-2 border-b-gray-100 w-full h-px block mt-8"></div>
            </div>

            <nav className='w-full'>
                <ul>
                    <ItemMenu name="Inicio" path="admin/" />
                    <ItemMenu name="Establecimiento" path="admin/establishment" />
                    <ItemMenu name="Citas" path="admin/appointment" />
                    <ItemMenu name="Empleados" path="admin/employee" />
                    <ItemMenu name="Suscripciones" path="admin/suscription" />
                </ul>
            </nav>

        </div>
    )
}
