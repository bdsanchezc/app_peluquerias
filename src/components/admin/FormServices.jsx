import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { onRegisterService } from "../../store/services";
import { InputField } from "../general";

export const FormServices = () => {

    const dispatch = useDispatch();
    const { control, handleSubmit, formState : { errors } } = useForm({criteriaMode: 'all', mode: 'onBlur'});
    const { company : { _id } } = useSelector( state => state.company );
    const { serviceActive } = useSelector( state => state.service ); 
 
    const onSubmit = (data) => {
        const service = {...data, company: _id}
        dispatch(onRegisterService(service));
    }

    return (
        <>
            <h1 className="font-bold text-xl border-b border-gray-100">Crear servicios</h1>
            <form autoComplete="off" className="w-full" onSubmit={handleSubmit(onSubmit)}>
                {
                    (serviceActive) 
                        && <Controller 
                            name="_id"
                            defaultValue={serviceActive._id}
                            control={control}
                            render={({field}) => <input type="hidden" />}
                        />
                }
                <Controller
                    name="name_service"
                    defaultValue={(serviceActive) ? serviceActive.name_service : ''}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "El nombre del servicio es obligatorio."
                        },
                        minLength: {
                            value: 5,
                            message: "El nombre del servicio no es válido."
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="Nombre del servicio"
                            inputName="name_service"
                            type="text"
                            error={errors?.name_service?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="price"
                    defaultValue={(serviceActive) ? serviceActive.price : ''}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "El nombre del servicio es obligatorio."
                        },
                        minLength: {
                            value: 5,
                            message: "El nombre del servicio no es válido."
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <InputField
                            label="Precio del servicio"
                            inputName="price"
                            type="text"
                            error={errors?.price?.message}
                            value={value}
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    name="description"
                    defaultValue={(serviceActive) ? serviceActive.description : ''}
                    control={control}
                    render={({field: {onChange, value}}) => 
                        <textarea 
                            name="description"
                            placeholder="Descripción del servicio"
                            className="w-full border border-gray-300 rounded-md py-3 px-4"
                            value={value}
                            onChange={onChange}
                        ></textarea>
                    }
                />
                <input type="submit" value="Guardar" className="bg-primary w-fit py-3 px-4 rounded-md col-start-1 mt-5" />
            </form>
        </>
    )
}
