import React,{useState} from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { Input, Radio, Button } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, Link } from 'react-router-dom';
import styles from './../../styles/Styles.module.css'

const schema = yup.object().shape({
    username: yup.string().required('Введите имя'),
    email: yup
        .string()
        .required('Обязательное поле')
        .email('Введите корректный адрес')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Неверный формат email'),
    password: yup
        .string()
        .required('Обязательное поле')
        .min(6, 'Пароль должен быть минимум 6 символов'),
    gender: yup
        .string()
        .oneOf(['male', 'female']),
    age: yup
        .number()
        .required('Обязательное поле')
        .typeError('Только числа')
        .integer()
        .min(18, 'Вам должно быть не менее 18 лет'),


})

const RegisterPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const onSubmit = (dataForms) => {
        if (dataForms) {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://todo-redev.herokuapp.com/api/users/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json',
                        },
                        body: JSON.stringify(dataForms),
                    });
                    const data = await response.json();
                    console.log(data);
                    if (!response.ok) {
                        setErrorMessage(data.message); // Устанавливаем сообщение об ошибке
                        return;
                    }
                    if (response.ok) {
                        navigate('/authorization')
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }
    }


    return (
        <div className={styles.wrapp}>
            <h1>Welcome!</h1>
            {errorMessage && <p className='text-red-500 xl font-bold'>{errorMessage}</p>}
            <form className='w-3/5 text-center mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>UserName:</label>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="Name" className='input' />}
                    />
                    <p className={styles.errors}>{errors.username?.message}</p>
                </div>
                <div>
                    <label>Email:</label>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="email" className='input' />}
                    />
                    <p className={styles.errors}>{errors.email?.message}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="password" className='input' />}
                    />
                    <p className={styles.errors}>{errors.password?.message}</p>
                </div>
                <div>
                    <label>Gender:</label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <Radio.Group {...field}>
                                <Radio value="male">Мужской</Radio>
                                <Radio value="female">Женский</Radio>
                            </Radio.Group>
                        )}
                    />
                    <p className={styles.errors}>{errors.gender?.message}</p>
                </div>
                <div>
                    <label>Age:</label>
                    <Controller
                        name="age"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="age" className='input' />}
                    />
                    <p className={styles.errors}>{errors.age?.message}</p>
                </div>
                <div>
                    <Button type="primary" htmlType="submit" className='mt-3'  >
                        Sign Up
                    </Button>
                </div>
            </form>
            <div className='text-center mx-auto'>
                Already have an account
                <Link
                    to='/authorization'
                    className='inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                    Sign In!
                </Link>
            </div>
        </div>
    );
};


export default RegisterPage;