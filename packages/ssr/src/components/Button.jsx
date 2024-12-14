import React, { useState } from "react"

export const Button = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Current Count is {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}