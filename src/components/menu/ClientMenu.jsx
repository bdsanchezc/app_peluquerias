import React from 'react'
import { ItemMenu } from './'

export const ClientMenu = () => {
    return (
        <nav className='w-full'>
            <ul>
                <ItemMenu name="Inicio" path="client/" />
                <ItemMenu name="Citas" path="client/appointment" />
                <ItemMenu name="Suscripciones" path="client/suscription" />
            </ul>
        </nav>
    )
}
