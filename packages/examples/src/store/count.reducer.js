const initState = {
  count: 0,
};
const countReducer = (state = initState, action) => {
  // console.log('count', state)
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default countReducer;
