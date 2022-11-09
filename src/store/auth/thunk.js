import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { baseApi } from '../../api';
import { onChecking } from './authSlice';

export const loginUser = (credentials) => {
    const {username, password} = credentials;

    return async (dispatch, getState) => {        
        dispatch(onChecking());

        try {
            const { data } = await baseApi.post('auth/login', {username, password});
            console.log(data);
        } catch (error) {
            const { response : { data } } = error

            if(data.errors?.username) {
                return Swal.fire({
                    title: '¡Lo sentimos!',
                    text: data.errors.username.msg,
                    icon: 'info',
                    heightAuto: false
                })
            }

            if(data.errors?.password) {
                return Swal.fire({
                    title: '¡Lo sentimos!',
                    text: data.errors.password.msg,
                    icon: 'info',
                    heightAuto: false
                })
            }

            return Swal.fire({
                title: '¡Lo sentimos!',
                text: data.message,
                icon: 'info',
                heightAuto: false
            })
        }

    }
}