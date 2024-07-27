const initialState = {
    addTodoInputText: '',
}

const addTodoInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO_INPUT":
            return{
                ...state,
                addTodoInputText: action.payload
            }
        default:
          return state;
    }

}

export default addTodoInputReducer;