import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { AuthRoute } from "../pages/auth/routes/AuthRoute";
import { DashboardPage } from '../pages/dashboard'

export const AppRouter = () => {

    const authStatus = 'no_auth';

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
                :   <Route path="/*" element={ <DashboardPage /> }/>
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
        </Routes>
    )
}
