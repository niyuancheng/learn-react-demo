import { useEffect, useReducer } from "react";
import { countReducer } from "../reducer/countReducer";
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from "../store/root.slice";

function Count() {
    const count = useSelector(state => {
        return state.counter.count;
    });
    const dispatch = useDispatch();

    return (
        <div>
            <div>当前计数为: {count}</div>
            <div>
                <button onClick={() => dispatch({type: 'increment'})}>+1</button>
                <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
            </div>
        </div>
    )
}

export default Count;