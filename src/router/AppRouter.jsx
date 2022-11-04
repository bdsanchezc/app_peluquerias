import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout, AuthLayout } from "../layout";
import { AuthRoutes, AdminRoutes, ClientRoutes, EmployeeRoutes } from "../routes";

export const AppRouter = () => {

    const authStatus = 'auth';
    const typeUser = 'employee';

    return (
        <Routes>
            {
                (authStatus === 'no_auth')
                ?   <Route 
                        path="/auth/*" 
                        element={ 
                            <AuthLayout>
                                <AuthRoutes />
                            </AuthLayout> 
                        }
                    />
                :   <Route 
                        path="/*" 
                        element={ 
                            <DashboardLayout>
                                { (typeUser === 'admin') && <AdminRoutes /> }
                                { (typeUser === 'client') && <ClientRoutes /> }
                                { (typeUser === 'employee') && <EmployeeRoutes /> }
                            </DashboardLayout>
                        }
                    />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
        </Routes>
    )
}
