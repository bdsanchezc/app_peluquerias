import { AdminMenu, ClientMenu, EmployeeMenu } from "../menu";

export const Sidebar = () => {
    
    const typeUser = 'employee';
    
    return (
        <div className='w-1/3 max-w-xs h-full bg-white py-5 shadow-lg'>

            <div className="px-10 pb-9 pt-5">
                <img src="/logo.svg" alt="Logo peluapp" width={120}/>
                <div className="border-b-2 border-b-gray-100 w-full h-px block mt-8"></div>
            </div>

            { (typeUser === 'admin') && <AdminMenu /> }
            { (typeUser === 'client') && <ClientMenu /> }
            { (typeUser === 'employee') && <EmployeeMenu /> }
            

        </div>
    )
}
