export function countReducer(state, action) {
    console.log('count reducer',state)
    if (action.type === 'increment') {
        return state + 1;
    } else if (action.type === 'decrement') {
        return state - 1;
    }
}