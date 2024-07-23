export function countReducer(state, action) {
    if (action.type === 'increment') {
        return state + 1;
    } else if (action.type === 'decrement') {
        return state - 1;
    }
}