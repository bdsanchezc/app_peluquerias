import { baseApi } from "../../api";
import { SweetAlert } from "../../components/general";
import { onClearServices } from "../services";
import { onCloseModal } from "../ui";
import { onClearCompany, onCreatedCompany, onLoadCompany } from "./companySlice";

export const onCheckCompany = () => {
    return async (dispatch) => {        
        try {
            const { data } = await baseApi.get('/company');
            dispatch(onLoadCompany(data.company));
        } catch (error) {
            dispatch(onClearCompany());
        }
    }
}

export const onRegisterCompany = (company) => {
    if(company._id) {
        return async (dispatch) => {
            try {
                const { data } = await baseApi.put(`/company/edit/${company._id}`, company);
                dispatch(onCreatedCompany(data.company));    
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

    return async (dispatch) => {
        try {
            const { data } = await baseApi.post('/company/create', company);

            dispatch(onCreatedCompany(data.company));
            localStorage.setItem('company', JSON.stringify(data.company));

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

export const onDeleteCompany = (id) => {
    return async (dispatch) => {
        const { data } = await baseApi.delete(`/company/delete/${id}`);

        dispatch(onClearCompany());
        dispatch(onClearServices());

        return SweetAlert({
            title: '¡Muy bien!',
            text: data.message,
            icon: 'success'
        })
    }
}
