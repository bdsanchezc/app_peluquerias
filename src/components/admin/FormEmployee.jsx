import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { InputField } from '../general';
import { onRegisterEmployee } from '../../store/employee';

export const FormEmployee = () => {

    const dispatch = useDispatch();
    const { control, handleSubmit, formState : { errors } } = useForm({criteriaMode: 'all', mode: 'onBlur'});
    const { company } = useSelector( state => state.company );

    const onSubmit = (data) => {
        dispatch( onRegisterEmployee({...data, company: company._id}) );
    }

    return (
        <>
            <h1 className="font-bold text-xl border-b border-gray-100">Registrar empleado</h1>
            <form autoComplete="off" className="w-full grid grid-cols-2 gap-x-5 max-w-5xl" onSubmit={handleSubmit(onSubmit)}>
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
                    name="identification"
                    defaultValue=""
                    control={control}
                    rules={{
                        minLength: {
                        value: 5,
                        message: "El n??mero de identificaci??n no es v??lido."
                        },
                        required: {
                        value: true,
                        message: 'El n??mero de identificaci??n es requerido.'
                        }
                    }}
                    render={
                        ({field: {onChange, value}}) => 
                        <InputField
                            label="N??mero de identificaci??n"
                            inputName="identification"
                            type="text"
                            error={errors?.identification?.message}
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
                        message: "El correo electr??nico no es v??lido."
                        },
                        required: {
                        value: true,
                        message: 'El nombre es requerido.'
                        }
                    }}
                    render={
                        ({field: {onChange, value}}) => 
                        <InputField
                            label="Correo electr??nico"
                            inputName="email"
                            type="email"
                            error={errors?.email?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="phone"
                    defaultValue=""
                    control={control}
                    rules={{
                        minLength: {
                            value: 10,
                            message: "El n??mero de tel??fono no es v??lido."
                        },
                        required: {
                            value: true,
                            message: "El n??mero de tel??fono es obligatorio."
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="Numero de t??lefono (60X....)"
                            inputName="phone"
                            type="tel"
                            error={errors?.phone?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <input type="submit" value="Guardar" className="bg-primary w-fit py-3 px-4 rounded-md col-start-1 mt-5" />
            </form>
        </>
    )
}
