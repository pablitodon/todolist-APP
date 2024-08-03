import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './../styles/Styles.module.css';
import { setValueInput } from '../../redux/slices/addTodoInputSlice';
import { clearError, setError } from '../../redux/slices/errorInputAddTodoSlice';
import { addTodo } from '../../redux/slices/todoSlice';

const AddTodo = ({logAction}) => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.addTodoInput.valueInput);
    const errInput = useSelector(state => state.inputErrorAddTodo.valueErr)

    const handleChange = (text) => {
        dispatch(setValueInput(text))
    };

    const handleAddTodo = (textTodo) => {
        if (inputText.length < 6 || inputText.trim().length === 0) {
            dispatch(setError('Text must be at least 6 characters long.'))
            return
        };
        dispatch(setValueInput(textTodo))
        dispatch(addTodo(inputText))
        logAction(`Добавлена задача: ${inputText}`)
        dispatch(clearError())
        dispatch(setValueInput(''))
    };




    return (
        <div className={styles.addTaskConatiner}>
            <h1>Get things done!</h1>
            <input
                className='w-1/6'
                placeholder='What is the task today?'
                type='text'
                value={inputText}
                onChange={(e) => handleChange(e.target.value)}
            />
            {errInput && <p className='text-red-800 font-bold'>{errInput}</p>}
            <button onClick={() => handleAddTodo(inputText)}>Add Task</button>
        </div>
    );
};

export default AddTodo;