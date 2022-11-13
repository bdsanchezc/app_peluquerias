import { EmployeeList, WelcomeCard } from "../../../components/admin";


export const Dashboard = () => {
    return (
        <>
            <WelcomeCard name="Jhon Doe" />
            <EmployeeList />

            <div className="mt-3">
                <h3 className="font-bold text-2xl">Mis suscripciones</h3>

                <div className="mt-4 flex items-center">

                    <div className="p-3 bg-slate-100 border border-slate-200 w-fit rounded-md mx-2">
                        <h5 className="font-bold">Esencial</h5>
                        <p><span className="font-bold">20</span> Usuarios</p>
                    </div>

                    <div className="p-3 bg-slate-100 border border-slate-200 w-fit rounded-md mx-2">
                        <h5 className="font-bold">Premium</h5>
                        <p><span className="font-bold">10</span> Usuarios</p>
                    </div>

                    <div className="p-3 bg-slate-100 border border-slate-200 w-fit rounded-md mx-2">
                        <h5 className="font-bold">VIP</h5>
                        <p><span className="font-bold">5</span> Usuarios</p>
                    </div>

                </div>
            </div>
        </>
    )
}
