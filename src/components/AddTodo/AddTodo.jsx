import React from 'react';
import styles from '../styles/Styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostTodo } from '../../redux/slices/todoSlice';
import { setValueInput } from '../../redux/slices/addTodoInputSlice';
// import withLogger from '../withLogger/withLogger';





const AddTodo = () => {
    const dispatch = useDispatch();
    const {textInput} = useSelector(state => state.addTodoTextInput);
    // const data = useSelector(state => state.todos)
    
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
            {/* {<p className='text-red-800' >Error</p>} */}
        </div>
        <button onClick={() => handleClick(textInput)}>
            Add Task
        </button>
    </>
    );
};

export default AddTodo;















    // const dispatch = useDispatch()
    // const {todos} = useSelector(state => state.todos);
    // const a = useSelector(state => state.todos);
    // const {textInput} = useSelector(state => state.addTodoTextInput);

    // console.log(todos);
    // console.log(a);

    // const handleChange  = (text) => {
    //     dispatch(setValueInput(text))
    // }

    // const handleAddTodo = (title) => {
    //     dispatch(addTodo(title));
    //     dispatch(fetchPostAddTodo({ title:title}));
    //     dispatch(setValueInput(''));
    // }
    






// const AddTodo = ({ setTodo,logAction }) => {

//     const [textTodo, setText] = useState('');
//     const [inputError, setInputError] = useState('');

//     const handleChange = (event) => {
//         const value = event.target.value
//         setText(value);
        
//     }

//     useEffect(() => {
//         const fetchTodos = async () => {
//             try {
//                 const response = await fetch(apiUrl, {
//                     method: 'GET',
//                     headers: {
//                         'accept': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('myToken')}`
//                     }
//                 });
//                 const data = await response.json();
//                 setTodo(data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchTodos();
//     }, []);


//     const apiUrl = process.env.REACT_APP_API_URL_TODOS; // Добавь эту строку в свой .env


//     const addTaskClick = () => {
//         if (textTodo.length < 6 ) {
//             setInputError('Minimum length - 6 characters');
//             return
//         }
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(apiUrl, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'accept': 'application/json',
//                         'Authorization':`Bearer ${localStorage.getItem('myToken')}`
//                     },
//                     body: JSON.stringify({title:textTodo})
//                 });
//                 const data =  await response.json();
//                 setTodo(prevTodos => [...prevTodos, {title:textTodo,id:data.id,isCompleted:false}])
//             } catch (error) {
//                 console.error(error);
//             }
           
//         }
//         fetchData();
//         logAction(`Добавлена задача : ${textTodo}`);
//         setText('')
//         setInputError('');
//     };

//     const addTaskKeyDown = (event) => {
//          if(event.key === 'Enter'){
//             addTaskClick()
//          }
//     }

//     return (
//         <>
//             <h1>Get things done</h1>
//             <div className={styles.addTaskConatiner}>
//                 <input
//                     type='text'
//                     value={textTodo}
//                     onChange={(event) => handleChange(event)}
//                     onKeyDown={addTaskKeyDown}
//                     placeholder='What is the task on today?'
//                     className='w-1/6'
//                 />
//                 {textTodo.length < 6 &&  <p className='text-red-800' >{inputError}</p>}
//             </div>
//             <button onClick={() => addTaskClick()}>Add Task</button>
//         </>
//     );
// };


// export default AddTodo;
