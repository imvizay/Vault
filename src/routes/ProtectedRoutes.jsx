import React from 'react'

import Unauthorized from '@routes/unauthorized_invalid_routes/Unauthorized';

function ProtectedRoutes({children,allowedRole=[]}) {

    const user = {
        role:'admin'
    }

    if(!user){
        console.log(`user not logged in cannot provide access to path - ${window.location.pathname}`)
        return <Navigate to='/login'/>
    }

    if(user?.role !== 'admin'){
        return <Unauthorized/>
    }

    // return components wrapped inside 
    return children 
}

export default ProtectedRoutes