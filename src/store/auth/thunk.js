import { baseApi } from '../../api';
import { SweetAlert } from '../../components/general';
import { onClearCompany } from '../company/companySlice';
import { onClearServices } from '../services';
import { onCloseModal } from '../ui';
import { onChecking, onLogin, onLogout } from './authSlice';

export const loginUser = (credentials) => {
    const {username, password} = credentials;

    return async (dispatch) => {        
        dispatch(onChecking());

        try {
            const { data } = await baseApi.post('auth/login', {username, password});

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                name: `${data.name}`,
                uid: data.uid,
                type: data.type_user
            }));

        } catch (error) {
            const { response : { data } } = error;

            if(data.errors?.username) {
                return SweetAlert({
                    title: '¡Lo sentimos!', 
                    text: data.errors.username.msg, 
                    icon: 'info'
                });
            }

            if(data.errors?.password) {
                return SweetAlert({
                    title: '¡Lo sentimos!', 
                    text: data.errors.password.msg, 
                    icon: 'info'
                });
            }
            
            return SweetAlert({
                title: '¡Lo sentimos!',
                text: data.message,
                icon: 'info'
            })
        }
    }
}

export const registerUser = (dataRegister) => {
    return async (dispatch) => {
        try {
            const { data } = await baseApi.post('auth/register', dataRegister);

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                name: `${data.name}`,
                uid: data.uid,
                type: data.type_user 
            }));

        } catch (error) {
            const { response : { data } } = error;

            if(data.errors?.name) {
                return SweetAlert({
                    title: '¡Lo sentimos!', 
                    text: data.errors.name.msg, 
                    icon: 'info'
                });
            }

            if(data.errors?.last_name) {
                return SweetAlert({
                    title: '¡Lo sentimos!', 
                    text: data.errors.last_name.msg, 
                    icon: 'info'
                });
            }

            if(data.errors?.email) {
                return SweetAlert({
                    title: '¡Lo sentimos!', 
                    text: data.errors.email.msg, 
                    icon: 'info'
                });
            }


            if(data.errors?.password) {
                return SweetAlert({
                    title: '¡Lo sentimos!', 
                    text: data.errors.password.msg, 
                    icon: 'info'
                });
            }
            
            if(data.errors?.type_user) {
                SweetAlert({
                    title: '¡Lo sentimos!', 
                    text: data.errors.type_user.msg, 
                    icon: 'info'
                });
            }
            
            return SweetAlert({
                title: '¡Lo sentimos!',
                text: data.message,
                icon: 'info'
            })
        }
    }
}

export const checkToken = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch(onLogout());

        try {
            const { data } = await baseApi.get('/auth/token');

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                name: data.name, 
                uid: data.uid,
                type: data.type_user
            }))

        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }
}

export const onStartLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(onLogout());
        dispatch(onClearCompany());
        dispatch(onClearServices());
        dispatch(onCloseModal());
    }
}