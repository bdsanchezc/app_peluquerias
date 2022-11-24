import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { checkToken } from "../store/auth";
import { DashboardLayout, AuthLayout } from "../layout";
import { AuthRoutes, AdminRoutes, ClientRoutes, EmployeeRoutes } from "../routes";
import { useEffect } from "react";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { status, user } = useSelector( state => state.auth );

    if(status === 'checking') {
    }

    useEffect(() => {
        dispatch(checkToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const {type} = user;

    return (
        <Routes>
            {
                (status === 'no_authenticated' || status === 'checking')
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
                                { (type === 'admin') && <AdminRoutes /> }
                                { (type === 'client') && <ClientRoutes /> }
                                { (type === 'employee') && <EmployeeRoutes /> }
                            </DashboardLayout>
                        }
                    />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
        </Routes>
    )
}
