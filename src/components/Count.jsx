import { useState } from "react";
function Count({number}) {
    const [num, setNum] = useState(number);

    function add(e) {
        console.log(`事件参数e是${e}`)
        setNum(num => num + 1)
    }
    return (
        <div className="count-wrapper">
            <div className="count">{num}</div>
            <button className="btn" onClick={add}>+1</button>
        </div>
    )
}

export default Count;