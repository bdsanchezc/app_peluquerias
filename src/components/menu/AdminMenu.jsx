import React from 'react'
import { ItemMenu } from './'

export const AdminMenu = () => {
    return (
        <nav className='w-full'>
            <ul>
                <ItemMenu name="Inicio" path="admin/" />
                <ItemMenu name="Establecimiento" path="admin/establishment" />
                <ItemMenu name="Citas" path="admin/appointment" />
                <ItemMenu name="Empleados" path="admin/employee" />
                <ItemMenu name="Suscripciones" path="admin/suscription" />
            </ul>
        </nav>
    )
}
