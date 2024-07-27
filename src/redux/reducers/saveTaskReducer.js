
const initialState = {
    saveTask : {}
}
const saveTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_TASK':
            return {
                ...state,
                saveTask:{
                    ...state.saveTask,
                    [action.payload]:!state.saveTask[action.payload]
                }
            }
        default:
            return state
    }
}

export default saveTaskReducer;