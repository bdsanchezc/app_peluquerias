import { useLocation } from 'react-router-dom';
import { ItemMenu } from './'

export const AdminMenu = () => {

    const { pathname } =  useLocation();

    return (
        <nav className='w-full px-10'>
            <ul>
                <ItemMenu name="Inicio" path="/admin/" active={pathname}/>
                <ItemMenu name="Mi negocio" path="/admin/establishment" active={pathname}/>
                <ItemMenu name="Citas" path="/admin/appointment" active={pathname}/>
                <ItemMenu name="Empleados" path="/admin/employee" active={pathname}/>
                <ItemMenu name="Suscripciones" path="/admin/suscription" active={pathname}/>
            </ul>
        </nav>
    )
}
