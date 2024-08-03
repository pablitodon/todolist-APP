

export const saveEditTask = (id) => {
    return{
        type: 'SAVE_TASK',
        payload: id
    }
}