import React from 'react';
import { useState, useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
import styles from '../styles/Styles.module.css'
import withLogger from '../withLogger/withLogger';
import { Link } from 'react-router-dom';
import Logout from './LogOut/Logout';

const AddTodoHOC = withLogger(AddTodo);
const TodoListHOC = withLogger(TodoList);


const HomeTodo = () => {

    const [todos, setTodo] = useState([]);
    return (
        <div className={styles.wrapp}>
            <AddTodoHOC 
              todos= {todos} 
              setTodo = {setTodo} />
           <TodoListHOC
             todos= {todos} 
             setTodo = {setTodo}
           /> 
          <Logout/>
        </div> 
    );
};

export default HomeTodo;