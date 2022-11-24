import { Link } from "react-router-dom";
import styles from './styles/ItemMenu.module.css';

export const ItemMenu = ({path, name, active}) => {
    
    return (
        <Link 
            to={path}
            className={
                `${styles['item-menu']} 
                ${(active === path) ? styles['item-menu-active'] : ''}`}
        >
            {name}
        </Link>
    )
}
