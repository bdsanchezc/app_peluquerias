import { baseApi } from "../../api";
import { SweetAlert } from "../../components/general";
import { onCloseModal } from "../ui";
import { onLoadServices, onClearServices, onActivateService, onAddNewService, onClearActivatedService } from './';

export const onCheckServices = () => {
    return async (dispatch) => {
        try {
            const { data } = await baseApi.get('/service');
            
            if(data.service.length > 0) {
                dispatch(onLoadServices(data.service));
            }
        } catch (error) {
            dispatch(onClearServices());
        }
    }
}

export const onRegisterService = (service) => {
    if(service._id) {
        return async (dispatch) => {
            try {
                const serviceEdit = {
                    name_service: service.name_service,
                    price: service.price,
                    description: service.description
                };
                
                const { data } = await baseApi.put(`/service/edit/${service._id}`, serviceEdit);
                dispatch(onCheckServices());
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
            const { data } = await baseApi.post('/service/create', service);

            dispatch(onAddNewService(data.service));
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

export const onDeleteService = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await baseApi.delete(`/service/delete/${id}`);
            dispatch(onCheckServices());
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

export const onActivatingService = (service) => {
    return async (dispatch) => {
        dispatch(onActivateService(service));
    }
}

export const onRemoveActivatedService = () => {
    return (dispatch) => {
        dispatch(onClearActivatedService());
    }
}