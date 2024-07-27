const initialState = {
  todoList: [],
};

const todoListReducer = (state = initialState, action) => {
        switch (action.type) {
            case "ADD_TODO":
                return {
                   ...state,
                    todoList: [...state.todoList,action.payload],
                };
                case 'UPDATE_TODO':
                return {
                    ...state,
                    todoList: state.todoList.map(task =>
                      task.id === action.payload.id
                          ? { ...task, text: action.payload.newTask }
                          : task
                  )
                };
                case 'DELETE_TODO': 
                return {
                  ...state,
                  todoList: state.todoList.filter(task => task.id !== action.payload.id)
                }
                case "COMPLETE_TODO":
                return {
                  ...state,
                  todoList: state.todoList.map(task =>
                    task.id === action.payload.id
                     ? {...task, isCompleted: !task.isCompleted } 
                      : task
                  )
                }
                default:
                return state 
        }

};

export default todoListReducer;