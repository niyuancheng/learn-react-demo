import { useReducer, useState } from "react";
import { countReducer } from "../hooks/useCount";
function Count() {
    const [count, dispatch] = useReducer(countReducer, 0);

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