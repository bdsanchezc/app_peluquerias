import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { InputField, InputRadio } from "../../components/general";

const options = [{
    idInput: "type_user_admin",
    label: "Administrador",
    value: "admin"
}, {
    idInput: "type_user_client",
    label: "Cliente",
    value: "client"
}]

export const RegisterPage = () => {
    
    const { control, handleSubmit, formState: { errors } } = useForm({criteriaMode: "all", mode: "onBlur"});
    
    const onSubmit = (data) => {
        console.log({data});
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

            <form className="mb-5" autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                <Controller 
                    name="name"
                    defaultValue=""
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'El nombre es requerido.'
                      }
                    }}
                    render={
                      ({field: {onChange, value}}) => 
                        <InputField
                          label="Nombres"
                          inputName="name"
                          type="text"
                          error={errors?.name?.message}
                          value={value}
                          onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="last_name"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: {
                        value: true,
                        message: 'El nombre es requerido.'
                        }
                    }}
                    render={
                        ({field: {onChange, value}}) => 
                        <InputField
                            label="Apellidos"
                            inputName="last_name"
                            type="text"
                            error={errors?.last_name?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    rules={{
                        minLength: {
                        value: 7,
                        message: "El correo electrónico no es válido."
                        },
                        required: {
                        value: true,
                        message: 'El nombre es requerido.'
                        }
                    }}
                    render={
                        ({field: {onChange, value}}) => 
                        <InputField
                            label="Correo electrónico"
                            inputName="email"
                            type="email"
                            error={errors?.email?.message}
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
                        message: "La contraseña no es válida."
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
                <Controller
                    name="type_user"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "El tipo de usuario es requerido."
                        }
                    }}
                    render={
                        ({field: {onChange, value}}) => 
                        <InputRadio
                            question="¿Qué tipo de usuario eres?" 
                            inputName="type_user"
                            onChange={onChange}
                            error={errors?.type_user?.message}
                            options={options}
                        />
                    }
                />
                <input type="submit" value="Registrarse" className="bg-primary py-3 px-4 rounded-md" />
            </form>

            <div className="mt-2">
                <h4 className="font-bold mb-2">¿Ya tienes una cuenta?</h4>
                <p className="mb-5">
                    Si ya tienes una cuenta, haz clic en el siguiente enlace para iniciar sesión
                </p>
                <Link to="/auth" className="color-primary font-bold">
                    Ir a inicio de sesión
                </Link>
            </div>
        </div>
    )
}
