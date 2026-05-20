import React,{lazy} from 'react'

import { Routes,Route } from 'react-router-dom';

// LAYOUTS
import MainLayout from '@layouts/MainLayout';
import UserDashboardLayout from '@layouts/UserDashboardLayout';
import AuthLayout from '@layouts/AuthLayout';

// INVALID OR UNAUTHORIZED ROUTES
import Unauthorized from './unauthorized_invalid_routes/Unauthorized';
import NotFound from './unauthorized_invalid_routes/Invalid';

// AUTH ROUTES
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

// PROTECTED COMPONENTS
import ProtectedRoutes from '@routes/ProtectedRoutes';

// BASE LANDING COMPONENT
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
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
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