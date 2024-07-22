import React from 'react';
import { Link } from 'react-router-dom';


const Logout = () => {
    return (
        <Link 
        onClick={ () => localStorage.clear()}
        to='/authorization'
        className='inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'
        >
            Log Out
        </Link>
    );
};

export default Logout;