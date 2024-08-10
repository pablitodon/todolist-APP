import React from 'react';
import styles from '../styles/Styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostTodo } from '../../redux/slices/todoSlice';
import { setValueInput } from '../../redux/slices/addTodoInputSlice';




const AddTodo = () => {
    const dispatch = useDispatch();
    const {textInput} = useSelector(state => state.addTodoTextInput);
    
const handleChange = (textAddInput) => {
        dispatch(setValueInput(textAddInput))
    }

    const handleClick = (text) => {
   dispatch(fetchPostTodo(text));
   dispatch(setValueInput(''))
    }
    
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleClick(textInput);
        dispatch(setValueInput(''))
      }
    }

    

    return (
        <>
        <h1>Get things done</h1>
        <div className={styles.addTaskConatiner}>
            <input
                type='text'
                placeholder='What is the task on today?'
                className='w-1/6'
                value={textInput}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
        <button onClick={() => handleClick(textInput)}>
            Add Task
        </button>
    </>
    );
};

export default AddTodo;

