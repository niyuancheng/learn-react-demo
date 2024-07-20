const initState = {
  isLogin: false,
};
const loginReducer = (state = initState, action) => {
  // console.log('login', state)
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLogin: true,
      };
    case "logout":
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
export default loginReducer;
