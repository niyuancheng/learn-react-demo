export function taskReducer(tasks, action) {
    switch (action.type) {
        case 'add':
            return [
                ...tasks,
                action.task
            ]
        case 'delete':
            return tasks.filter(item => {
                return item.id !== action.task.id;
            })
        case 'edit':
            return tasks.map(item => {
                if (item.id === action.task.id) {
                    return {...action.task }
                } 
                return item;
            }) 
    }
}