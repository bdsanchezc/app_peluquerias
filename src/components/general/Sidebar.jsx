import { useDispatch, useSelector } from "react-redux";
import { onStartLogout } from "../../store/auth";
import { AdminMenu, ClientMenu, EmployeeMenu } from "../menu";
import styles from '../menu/styles/ItemMenu.module.css';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { user } = useSelector( state => state.auth );
    const { type } = user;

    const onLogout = () => {
        dispatch(onStartLogout());
        
    }
    
    return (
        <div className='w-1/3 max-w-xs h-full bg-white py-5 shadow-lg flex flex-col'>

            <div className="px-10 pb-9 pt-5">
                <img src="/logo.svg" alt="Logo peluapp" width={120}/>
                <div className="border-b-2 border-b-gray-100 w-full h-px block mt-8"></div>
            </div>

            <div className="flex-1">
                { (type === 'admin') && <AdminMenu /> }
                { (type === 'client') && <ClientMenu /> }
                { (type === 'employee') && <EmployeeMenu /> }
            </div>
            
            <div className="px-10 pt-9">
                <div className="border-t-2 border-b-gray-100 w-full h-px block mt-8"></div>
                <button onClick={onLogout} className={`${styles['item-menu']} text-left`}>Cerrar sesión</button>
            </div>

        </div>
    )
}
