import { useEffect, useRef, useState } from "react";
import "./ToDoInput.css";
export default function ToDoInput(props) {
    const [task, setTask] = useState('');
    let inputContainer = useRef(null);
    const handleInput = (e) => {
        setTask(e.target.value);
    }

    // useEffect(() => {
    //     const node = inputContainer.current
    //     let timer = window.requestAnimationFrame(() => {
    //         node.classList.add('todo-input-container-show');
    //     })
    //     return () => {
    //         // node.classList.remove('todo-input-container-show');
    //         window.cancelAnimationFrame(timer);
    //         timer = null; 
    //     }
    // }, []);

    const handleChange = (task) => {
        props.onChange(task);
    }
    return (
        <div className="todo-input-wrapper" ref={inputContainer}>
            <div className="todo-input-container">
                <textarea placeholder="please input your task here" onInput={handleInput}></textarea>
                <button onClick={() => handleChange(task)} disabled={task === '' || task === undefined}>Confirm</button>
                <button onClick={() => handleChange(undefined)}>Cancel</button>
            </div>
        </div>
    )
}