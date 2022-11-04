import { Navigate, Route, Routes } from 'react-router-dom';
import { Appointment, Dashboard, Suscription } from '../pages/dashboard/client';

export const ClientRoutes = () => {
  return (
    <Routes>
        <Route path='/client' element={<Dashboard />} />
        <Route path='/client/appointment' element={<Appointment />} />
        <Route path='/client/suscription' element={<Suscription />} />
        <Route path='/*' element={<Navigate to='/client' />} />
    </Routes>
  )
}