import { Navigate, Route, Routes } from 'react-router-dom';
import { Appointment, Dashboard, Employee, Establishment, Suscription } from '../pages/dashboard/admin';

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/establishment' element={<Establishment />} />
        <Route path='/admin/appointment' element={<Appointment />} />
        <Route path='/admin/employee' element={<Employee />} />
        <Route path='/admin/suscription' element={<Suscription />} />
        <Route path='/*' element={<Navigate to='/admin' />} />
    </Routes>
  )
}