import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button } from 'antd';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from './../../styles/Styles.module.css'

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Введите корректный email')
        .required('Обязательное поле')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Неверный формат email'),
    password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required('Обязательное поле')
});

const Authorization = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [err, setErr] = useState('');
    const navigate = useNavigate()

    const onSubmit = async (dataForm) => {
        try {
            const response = await fetch('https://todo-redev.herokuapp.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataForm)
            });
            const dataResp = await response.json();
            if (response.ok) {
                console.log(dataResp);
                const token = dataResp.token
                localStorage.setItem('myToken', token);
                navigate('/homeTodoList');
            } else {
                setErr(dataResp.message)
            }
        } catch (error) {
            console.error('Error fetching.1-100', error);
        }
    };

    return (
        <div className={styles.wrapp}>
            <form className={styles.wrappLogin} onSubmit={handleSubmit(onSubmit)}>
                {err && <p className='text-red-500 xl font-bold'>{err}</p>}
                <div>
                    <label>Email:</label>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="email" />}
                    />
                    <p className={styles.errors}>{errors.email?.message}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="password" />}
                    />
                    <p className={styles.errors}>{errors.password?.message}</p>
                </div>
                <Button className='mt-5' type="primary" htmlType="submit" >
                    Sign In
                </Button>
            </form>
            <div className='text-center mx-auto'>
                Don't have an account?
                <Link 
                to={'/'}
                className='inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    Sign Up!
                </Link>
            </div> 
        </div>
    );
};

export default Authorization;