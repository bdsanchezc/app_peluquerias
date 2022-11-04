import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminDashboardPage, AdminEstablishmentPage, AdminAppointmentPage, AdminEmployeePage, AdminSuscriptionPage } from '../';

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/admin' element={<AdminDashboardPage />} />
        <Route path='/admin/establishment' element={<AdminEstablishmentPage />} />
        <Route path='/admin/appointment' element={<AdminAppointmentPage />} />
        <Route path='/admin/employee' element={<AdminEmployeePage />} />
        <Route path='/admin/suscription' element={<AdminSuscriptionPage />} />
        <Route path='/*' element={<Navigate to='/admin' />} />
    </Routes>
  )
}