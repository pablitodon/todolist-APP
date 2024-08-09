import React, { useEffect } from  'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button } from 'antd';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from './../../styles/Styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostLoginUser } from '../../../redux/slices/formAuthorizationSlice';

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
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { status, data } = useSelector(state => state.formLogin); 
    console.log(status);
    console.log(data);

    const token = localStorage.getItem('myToken');
    console.log(token);

    useEffect(() => {
        if (token) {
            navigate('/homeTodoList');
        }
    }, [token, navigate])


    
    const onSubmit = (formData) => {
         dispatch(fetchPostLoginUser(formData))
    }
 
    return (
        <div className={styles.wrapp}>
            <form className={styles.wrappLogin} onSubmit={handleSubmit(onSubmit)}>
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
                        render={({ field }) => <Input {...field}  placeholder="password" />}
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
                    to='/'
                    className='inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    Sign Up!
                </Link>
            </div>
        </div>
    );
};

export default Authorization;
