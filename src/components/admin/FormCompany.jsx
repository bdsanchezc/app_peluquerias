import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { onRegisterCompany } from '../../store/company/thunk';
import { InputField } from "../general/InputField";

export const FormCompany = () => {

    const dispatch = useDispatch();
    const { control, handleSubmit, formState : { errors } } = useForm({criteriaMode: 'all', mode: 'onBlur'});
    const { hasCompany, company } = useSelector( state => state.company );

    const onSubmit = (data) => {
        dispatch(onRegisterCompany(data));
    }

    return (
        <>
            <h1 className="font-bold text-xl border-b border-gray-100">Crear establecimiento</h1>
            <form autoComplete="off" className="w-full grid grid-cols-2 gap-x-5 max-w-5xl" onSubmit={handleSubmit(onSubmit)}>
                {
                    (hasCompany) 
                    &&  <Controller 
                            name="_id"
                            defaultValue={company._id}
                            control={control}
                            render={({field}) => <input type="hidden" />}
                        />
                }
                <Controller
                    name="name_company"
                    defaultValue={ (hasCompany === 'has_company') ? company.name_company : ''}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "El nombre del establecimiento es obligatorio."
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="Nombre del establecimiento"
                            inputName="name_company"
                            type="text"
                            error={errors?.name_company?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="id_register"
                    defaultValue={(hasCompany === 'has_company') ? company.id_register : ''}
                    control={control}
                    rules={{
                        minLength: {
                            value: 3,
                            message: "La identificaci??n de registro no es v??lida."
                        },
                        required: {
                            value: true,
                            message: "La identificaci??n de registro es obligatoria."
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="identificaci??n de registro"
                            inputName="id_register"
                            type="text"
                            error={errors?.id_register?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="phone"
                    defaultValue={(hasCompany === 'has_company') ? company.phone : ''}
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
                <Controller
                    name="address"
                    defaultValue={(hasCompany === 'has_company') ? company.address : ''}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'La direcci??n es obligatoria, en caso de no tener establecimiento f??sico, coloque "Domicilio".'
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="Direcci??n"
                            inputName="address"
                            type="address"
                            error={errors?.address?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="city"
                    defaultValue={(hasCompany === 'has_company') ? company.city : ''}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'La ciudad es obligatoria.'
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="Ciudad"
                            inputName="city"
                            type="text"
                            error={errors?.city?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <h4 className="col-start-1 col-end-3 font-bold mt-5 mb-3">Horarios de atenci??n</h4>
                <Controller
                    name="start_time"
                    defaultValue={(hasCompany === 'has_company') ? company.start_time : '07:00'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'El horario de inicio es obligatorio.'
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="Hora de apertura"
                            inputName="start_time"
                            type="time"
                            error={errors?.start_time?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="end_time"
                    defaultValue={(hasCompany === 'has_company') ? company.end_time : '18:00'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'El horario de finalizaci??n es obligatorio.'
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="Hora de cierre"
                            inputName="end_time"
                            type="time"
                            error={errors?.end_time?.message}
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
