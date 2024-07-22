import React  from 'react';
import { Outlet,Navigate} from 'react-router-dom';


const PrivateRoute = ({...props}) => {
    return localStorage.getItem('myToken') ? <Outlet/> : <Navigate  to='/authorization' replace /> ;
};

export default PrivateRoute;