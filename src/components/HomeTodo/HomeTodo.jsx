import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
import styles from '../styles/Styles.module.css'
import withLogger from '../withLogger/withLogger';
import Logout from './LogOut/Logout';

const AddTodoHOC = withLogger(AddTodo);
const TodoListHOC = withLogger(TodoList);


const HomeTodo = () => {

    return (
        <div className={styles.wrapp}>
            <AddTodoHOC/>
           <TodoListHOC/> 
          <Logout/>
        </div> 
    );
};

export default HomeTodo;