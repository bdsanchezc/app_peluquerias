import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { InputField } from "../../components/general"
import { loginUser } from "../../store/auth";


export const LoginPage = () => {

    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({criteriaMode: "all", mode: "onBlur"});

    const onSubmit = (data) => {
        dispatch(loginUser(data));
    }

    return (
        <div className="w-full h-full flex flex-col justify-center px-10">
            <div className="py-6 mb-5">
                <img src="/logo.svg" alt="styled spapp" className="w-52" />
            </div>

            <h2 className="font-bold text-2xl mb-5">Iniciar sesión</h2>
            <p>
                Bienvenido a styled spapp, para acceder al sistema utiliza las
                credenciales creadas anteriormente.
            </p>

            <form className="mb-5" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    defaultValue=""
                    control={control}
                    rules={{
                        minLength: {
                        value: 7,
                        message: 'El correo electrónico no es válido',
                        },
                        required: {
                        value: true,
                        message: 'El usuario es requerido.'
                        }
                    }}
                    render={
                        ({field: {onChange, value}}) => 
                        <InputField
                            label="Usuario / Correo electrónico"
                            inputName="username"
                            type="text"
                            error={errors?.username?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="password"
                    defaultValue=""
                    control={control}
                    rules={{
                        minLength: {
                        value: 8,
                        message: 'La contraseña no es válida.',
                        },
                        required: {
                        value: true,
                        message: 'La contraseña es requerida.'
                        }
                    }}
                    render={
                        ({field: {onChange, value}}) => 
                        <InputField
                            label="Contraseña"
                            inputName="password"
                            type="password"
                            error={errors?.password?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <input type="submit" value="Iniicar sesión" className="bg-primary py-3 px-4 rounded-md" />
            </form>

            <div className="mt-2">
                <h4 className="font-bold mb-2">¿Aún no tienes una cuenta?</h4>
                <p className="mb-5">
                Si deseas registrarte en nuestra aplicación haz clic en el siguiente
                enlace.
                </p>
                <Link to="/auth/register" className="color-primary font-bold">
                Ir a crear nueva cuenta
                </Link>
            </div>
        </div>
    )
}
