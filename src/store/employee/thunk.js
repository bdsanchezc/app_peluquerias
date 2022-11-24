import { baseApi } from "../../api";
import { SweetAlert } from "../../components/general";
import { onCloseModal } from "../ui";
import { onAddNewEmployee, onLoadEmployee } from "./employeeSlice";

export const onCheckEmployee = () => {
    return async (dispatch) => {
        try {
            const { data } = await baseApi.get('/employee');
            (data.employees.length > 0) && dispatch(onLoadEmployee(data.employees));
        } catch (error) {
            const { response : { data } } = error;
            return SweetAlert({
                title: '¡Lo sentimos!',
                text: data.message,
                icon: 'info'
            })
        }
    }
}

export const onRegisterEmployee = (employee) => {
    return async (dispatch) => {
        try {
            const { data } = await baseApi.post('/employee/create', employee);
            dispatch(onAddNewEmployee(data.employee));
            dispatch(onCloseModal());

            return SweetAlert({
                title: '¡Muy bien!',
                text: data.message,
                icon: 'success'
            })
        } catch (error) {
            const { response : { data } } = error;
            dispatch(onCloseModal());
            return SweetAlert({
                title: '¡Lo sentimos!',
                text: data.message,
                icon: 'info'
            })
        }
    }
}