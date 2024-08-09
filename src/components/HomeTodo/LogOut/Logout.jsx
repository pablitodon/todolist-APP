import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Очистка localStorage
        localStorage.clear();
        // Дополнительные действия: сброс состояния аутентификации, если это необходимо
        // Перенаправление на страницу авторизации после выхода
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