import { Navigate, Route, Routes } from "react-router-dom";
import { Appointment, Dashboard, Information } from '../pages/dashboard/employee';

export const EmployeeRoutes = () => {
    return (
        <Routes>
            <Route path='/employee' element={<Dashboard />} />
            <Route path='/employee/appointment' element={<Appointment />} />
            <Route path='/employee/information' element={<Information />} />
            <Route path='/*' element={<Navigate to='/employee' />} />
        </Routes>
    )
}
