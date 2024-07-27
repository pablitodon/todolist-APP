

export const isSaveTask = (id) => {
    return{
        type: 'SAVE_TASK',
        payload: id
    }
}