import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const SweetAlert = ({title, text, icon}) => {
    return (
        Swal.fire({
            title,
            text,
            icon,
            heightAuto: false
        })
    )
}
