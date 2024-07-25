import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Styles.module.css'
import withLogger from '../withLogger/withLogger';

const AddTodo = ({ setTodo,logAction }) => {

    const [textTodo, setText] = useState('');
    const [inputError, setInputError] = useState('');

    const handleChange = (event) => {
        const value = event.target.value
        setText(value);
        
    }

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://todo-redev.herokuapp.com/api/todos', {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('myToken')}`
                    }
                });
                const data = await response.json();
                setTodo(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTodos();
    }, []);





    const addTaskClick = () => {
        if (textTodo.length < 6 ) {
            setInputError('Minimum length - 6 characters');
            return
        }
        const fetchData = async() => {
            try {
                const response = await fetch('https://todo-redev.herokuapp.com/api/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json',
                        'Authorization':`Bearer ${localStorage.getItem('myToken')}`
                    },
                    body: JSON.stringify({title:textTodo})
                });
                const data =  await response.json();
                setTodo(prevTodos => [...prevTodos, {title:textTodo,id:data.id,isCompleted:false}])
            } catch (error) {
                console.error(error);
            }
           
        }
        fetchData();
        logAction(`Добавлена задача : ${textTodo}`);
        setText('')
        setInputError('');
    };

    const addTaskKeyDown = (event) => {
         if(event.key === 'Enter'){
            addTaskClick()
         }
    }

    return (
        <>
            <h1>Get things done</h1>
            <div className={styles.addTaskConatiner}>
                <input
                    type='text'
                    value={textTodo}
                    onChange={(event) => handleChange(event)}
                    onKeyDown={addTaskKeyDown}
                    placeholder='What is the task on today?'
                    className='w-1/6'
                />
                {textTodo.length < 6 &&  <p className='text-red-800' >{inputError}</p>}
            </div>
            <button onClick={() => addTaskClick()}>Add Task</button>
        </>
    );
};


export default AddTodo;
