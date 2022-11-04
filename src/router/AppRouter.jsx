import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../layout";
import { AuthLayout } from "../layout/AuthLayout";
import { AuthRoute } from "../pages/auth/routes/AuthRoute";
import { AdminRoutes } from "../pages/dashboard/admin/routes";

export const AppRouter = () => {

    const authStatus = 'auth';
    const typeUser = 'admin';

    return (
        <Routes>
            {
                (authStatus === 'no_auth')
                ?   <Route 
                        path="/auth/*" 
                        element={ 
                            <AuthLayout>
                                <AuthRoute />
                            </AuthLayout> 
                        }
                    />
                :   <Route 
                        path="/*" 
                        element={ 
                            <DashboardLayout>
                                {
                                    (typeUser === 'admin') 
                                        && <AdminRoutes />
                                }
                            </DashboardLayout>
                        }
                    />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
        </Routes>
    )
}
