import React from 'react'
import { ItemMenu } from './'

export const EmployeeMenu = () => {
    return (
        <nav className='w-full'>
            <ul>
                <ItemMenu name="Inicio" path="employee/" />
                <ItemMenu name="Citas" path="employee/appointment" />
                <ItemMenu name="Información" path="employee/information" />
            </ul>
        </nav>
    )
}
