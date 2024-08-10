import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/authorization');
    };

    return (
        <button 
            onClick={handleLogout}
            className='inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'
        >
            Log Out
        </button>
    );
};

export default Logout;