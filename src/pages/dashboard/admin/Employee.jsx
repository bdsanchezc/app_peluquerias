import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ModalCompany, NotEmployee, CardEmployee } from "../../../components/admin";
import { onCheckEmployee } from "../../../store/employee";

export const Employee = () => {

    const dispatch = useDispatch();
    const { hasCompany } = useSelector(state => state.company);
    const { hasEmployee, employees } = useSelector(state => state.employee);

    useEffect(() => {
        dispatch(onCheckEmployee());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    if(hasCompany !== 'has_company') {
        return (
            <>
                <div className="mb-5">
                    <h1 className="font-bold text-4xl mb-7">Mis empleados</h1>
                    <p>Acá encontrarás el listado de empleados que se encuentrán afiliados a tu establecimiento. Además podrás añadir nuevos.</p>
                </div>
                <div className="w-full bg-slate-100 border border-slate-200 text-center p-5">
                    <p className="mb-3">Aún no posees un establecimiento registrado.</p>
                    <Link to='/admin/establishment' className="color-alternative font-bold">
                        Crear un nuevo establecimiento
                    </Link>
                </div>
            </>
        )
    }

    if(hasCompany === 'hasCompany' && hasEmployee !== 'not_employee') {
        return (
            <>
                <div className="mb-5">
                    <h1 className="font-bold text-4xl mb-7">Mis empleados</h1>
                    <p>Acá encontrarás el listado de empleados que se encuentrán afiliados a tu establecimiento. Además podrás añadir nuevos.</p>
                    <NotEmployee />
                    <ModalCompany />
                </div>
            </>
        )
    }

    if(hasEmployee === 'has_employee') {
        return (
            <>
                <div className="mb-5">
                    <h1 className="font-bold text-4xl mb-7">Mis empleados</h1>
                    <p>Acá encontrarás el listado de empleados que se encuentrán afiliados a tu establecimiento. Además podrás añadir nuevos.</p>
                </div>
                    {
                        employees.map( employee => (
                            <CardEmployee {...employee} />
                        ))
                    }
                <ModalCompany />
            </>
        )
    }
}
