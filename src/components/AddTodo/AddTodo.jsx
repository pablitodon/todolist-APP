import styles from './../styles/Styles.module.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoInput } from '../../redux/actions/addTodoInputAction';
import { addErrorLengthInput } from '../../redux/actions/errorLengthInputAction';
import { addTodo } from '../../redux/actions/todoListAction';

const AddTodo = ({logAction}) => {

    const dispatch = useDispatch();
    const { addTodoInputText } = useSelector(state => state.addTodoInputText);
    const { inputError } = useSelector(state => state.inputError)

    const handleAddTodoInputText = (textInput) => {
        dispatch(addTodoInput(textInput));
    }

    const handleAddTodo = (text) => {
        if (addTodoInputText.length < 6 || addTodoInputText.trim().length === 0) {
            dispatch(addErrorLengthInput('Text must be at least 6 characters long.'));
            return;
        }
        logAction(`Добавлена задача ${text}`)
        dispatch(addTodo(text))
        dispatch(addErrorLengthInput(''));
        dispatch(addTodoInput(''));
    }

    return (
        <div className={styles.addTaskConatiner}>
            <h1>Get things done!</h1>
            <input
                value={addTodoInputText}
                type='text'
                placeholder='What is the task today ?'
                className='w-1/6'
                onChange={(e) => handleAddTodoInputText(e.target.value)}
            />
            {inputError && <p className='text-red-800'>{inputError}</p>}
            <button onClick={() => handleAddTodo(addTodoInputText)} > Add Task</button>
        </div>

    );
}

export default AddTodo;

