import { InputField } from "../../../components/general"

export const Establishment = () => {
    return (
        <>
            <div className="">
                <h1 className="font-bold text-4xl mb-7">Mi negocio</h1>
                <p>Para poder agregar citas a tu calendario, debes completar la información de tu negocio. En caso de no tener un establecimiento fisico, especifica en la dirección “A domicilio”.</p>
            </div>

            <form autoComplete="off" className="w-full grid grid-cols-2 gap-x-5 max-w-5xl mt-7 mx-auto">
                <InputField
                    label="Nombre del establecimiento"
                    inputName="company"
                    type="text"
                    error=""
                    value=""
                    onChange=""
                />
                <InputField
                    label="Número de registro"
                    inputName="numberRegister"
                    type="number"
                    error=""
                    value=""
                    onChange=""
                />
                <InputField
                    label="Teléfono"
                    inputName="phone"
                    type="number"
                    error=""
                    value=""
                    onChange=""
                />
                <InputField
                    label="Dirección"
                    inputName="address"
                    type="address"
                    error=""
                    value=""
                    onChange=""
                />
                <InputField
                    label="Ciudad"
                    inputName="city"
                    type="text"
                    error=""
                    value=""
                    onChange=""
                />

                <h3 className="font-bold text-2xl col-start-1 col-end-3 mt-4">Horarios</h3>
                
                <InputField
                    label="Hora inicial"
                    inputName="start_time"
                    type="time"
                    error=""
                    value="00:00"
                    onChange=""
                />
                <InputField
                    label="Hora final"
                    inputName="start_end"
                    type="time"
                    error=""
                    value="00:00"
                    onChange=""
                />
            </form>
        </>
    )
}

