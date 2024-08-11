import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteTodo, fetchPatchTodo, fetchGetTodos, updateTodo, fetchPatchCompleteTodo } from '../../redux/slices/todoSlice';
import { changeEditMode } from '../../redux/slices/editModeSlice'; 

const TodoList = ({ logAction }) => {

    const dispatch = useDispatch();
    const { status, data } = useSelector(state => state.todos);
    const isEditMode = useSelector(state => state.editModeTodo)
        
    


    useEffect(() => {
        const getTodos = () => {
            dispatch(fetchGetTodos());
        }
        getTodos()
    }, [dispatch])

    const handleDeleteClick = (id) => {
        dispatch(fetchDeleteTodo(id));
    }

    const handleSaveEdit= (id,newText) => {
        dispatch(fetchPatchTodo({id,newText}));
        logAction(`Edit todo:${newText}`)
        dispatch(changeEditMode(id));
    }

    const handleCompleteTodo = (id,completed,title) => {
        dispatch(fetchPatchCompleteTodo(id,completed));
        if(!completed) {
            logAction(`complete todo:${title}`)
        }
    }
    
    return (
        <div>
            {status === 'loading' && <p>loading...</p>}
            {
                status === 'succeeded' && data &&
                data.map(todos => {
                    return (
                        <div key={todos.id}>
                            {isEditMode[todos.id]  ?
                                    (<div>
                                        <input
                                            type="text"
                                            value={todos.title}
                                            onChange={(e) => dispatch(updateTodo({ id: todos.id, title: e.target.value }))}
                                        />
                                        <button onClick= {() =>(handleSaveEdit(todos.id,todos.title))}>SAVE TASK</button>
                                    </div>)
                                    :
                                   ( <div>
                                    
                                       <div onClick={() => handleCompleteTodo(todos.id,todos.isCompleted,todos.title)}>
                                       { todos.isCompleted ? <s>{todos.title}</s> : <p>{todos.title}</p>}
                                       </div>
                                        <button onClick={() => dispatch(changeEditMode(todos.id))}>
                                            <svg className="feather feather-edit w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                        </button>
                                        <button onClick={() => handleDeleteClick(todos.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>)
                            }
                        </div>
                    )
                })
            }
        </div>
    )

}

export default TodoList



