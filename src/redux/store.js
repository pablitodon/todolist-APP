import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import addTodoInputSlice from './slices/addTodoInputSlice';
import errorInputAddTodoSlice from './slices/errorInputAddTodoSlice';
import editModeSlice from './slices/editModeSlice';

const store = configureStore({
    reducer:{
        todo:todoSlice,
        addTodoInput:addTodoInputSlice,
        inputErrorAddTodo:errorInputAddTodoSlice,
        editTodoInputId: editModeSlice
    }
})


export default store;



















// import { legacy_createStore as createStore, combineReducers } from "redux";
// import {composeWithDevTools} from 'redux-devtools-extension'
// import todoListReducer from "./reducers/todoListReducer";
// import addTodoInputReducer from "./reducers/addTodoInputReducer";
// import errorLengthInputReducer from "./reducers/errorLengthInputReducer";
// import saveTaskReducer from "./reducers/saveTaskReducer";


// const rootReducer = combineReducers({
//     todoList:todoListReducer,
//     addTodoInputText: addTodoInputReducer,
//     inputError:errorLengthInputReducer,
//     saveTask:saveTaskReducer
// });


// const store = createStore(rootReducer, composeWithDevTools());
// export default store;