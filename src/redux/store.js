import { legacy_createStore as createStore, combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import todoListReducer from "./reducers/todoListReducer";
import addTodoInputReducer from "./reducers/addTodoInputReducer";
import errorLengthInputReducer from "./reducers/errorLengthInputReducer";
import saveTaskReducer from "./reducers/saveTaskReducer";


const rootReducer = combineReducers({
    todoList:todoListReducer,
    addTodoInputText: addTodoInputReducer,
    inputError:errorLengthInputReducer,
    saveTask:saveTaskReducer
});


const store = createStore(rootReducer, composeWithDevTools());
export default store;