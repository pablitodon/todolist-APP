
export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        payload:{
            id: Math.random(),
            text: text,
            isCompleted: false,
        }
    }
}

export const updateTask = (id,newTask) => {
    return {
        type: "UPDATE_TODO",
        payload: {
            id:id,
            newTask: newTask,
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: {
            id: id,
        }
    }
}

export const completeTask = (id) => {
    return {
        type: "COMPLETE_TODO",
        payload: {
            id: id,
        }
    }
}