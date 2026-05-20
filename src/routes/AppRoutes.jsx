import React,{lazy} from 'react'
import MainLayout from '@layouts/MainLayout';
import { Routes,Route } from 'react-router-dom';
import AuthLayout from '@layouts/AuthLayout';
import AccessVault from '@components/auth/Login';
import CreateVault from '@components/auth/Register';
import UserDashboardLayout from '@layouts/UserDashboardLayout';
import ProtectedRoutes from '@routes/ProtectedRoutes';
import Unauthorized from './unauthorized_invalid_routes/Unauthorized';
import NotFound from './unauthorized_invalid_routes/Invalid';

const Home = lazy( () => import('@pages/public/Home'))

function AppRoutes() {
  return (
    <>
     <Routes>
     
      <Route path='*' element={<NotFound/>}/>

      {/* LANDING PAGE */}
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>    
        </Route>

      {/* AUTH ROUTES */}
      <Route element={<AuthLayout/>}>
        <Route path='/login' element={<AccessVault/>}/>
        <Route path='/register' element={<CreateVault/>}/>
      </Route>

      {/* CLIENT ROUTES */}
      <Route 
        path='/user/dashboard' 
        element={
          <ProtectedRoutes allowedRoles={['client']}>
            <UserDashboardLayout/>
          </ProtectedRoutes>
        }>
      </Route>

    

     </Routes>
    </>
  )
}

export default AppRoutes