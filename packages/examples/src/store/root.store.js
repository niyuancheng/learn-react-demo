//* redux-tooltip的写法
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./root.slice";

// export default configureStore({
//   reducer: {
//     rootReducer
//   }
// });
//* 传统的redux写法
import { combineReducers } from "redux";
import { createStore } from "redux";
import countReducer from "./count.reducer";
import loginReducer from "./login.reducer";
const reducer = combineReducers({
  counter: countReducer,
  login: loginReducer
})

const store = createStore(reducer);
export default store;
