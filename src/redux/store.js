import {configureStore} from '@reduxjs/toolkit';
import formRegisterUserSlice from './slices/formRegisterUserSlice';
import formAuthorizationSlice from './slices/formAuthorizationSlice';
import addTodoInputSlice from './slices/addTodoInputSlice';
import todoSlice from './slices/todoSlice';
import EditModeSlice from './slices/editModeSlice';

const store = configureStore({
    reducer: {
        formRegUser:formRegisterUserSlice,
        formLogin:formAuthorizationSlice,
        todos:todoSlice,
        addTodoTextInput: addTodoInputSlice,
        editModeTodo:EditModeSlice
    }
})

export default store;