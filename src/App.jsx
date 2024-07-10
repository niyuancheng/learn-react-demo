import "./App.css";

import { useReducer, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ToDo from "./todo/ToDo";
import ToDoItem from "./todo/ToDoItem";
import ToDoAdd from "./todo/ToDoAdd";
import ToDoInput from "./todo/ToDoInput";
import { taskReducer } from "./hooks/useToDoTask";
const initialTasks = [
  {
    content: "学React",
    id: 1,
    isDone: false,
  },
  {
    content: "吃饭",
    id: 2,
    isDone: false,
  },
]
function App() {
  const [showToDoInput, setShowToDoInput] = useState(false);
  const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);
  const nodeRef = useRef(null);
  //* 编辑任务
  const handleChange = (todo) => {
    dispatchTask({
      type: 'edit',
      task: {
        ...todo,
        isDone: !todo.isDone
      }
    })
  };
  //* 删除任务
  const handleDelete = (todo) => {
    dispatchTask({
      type: 'delete',
      task: todo,
    })
  }

  //* 添加任务
  const handleClick = (value, content) => {
    setShowToDoInput(value); 
    if (content) {
      dispatchTask({
        type: 'add',
        task: {
          content,
          id: tasks.length + 1,
          isDone: false
        }
      })
    }
  }
  return (
    <div className="App" >
      <ToDoAdd onClick={() => handleClick(true)}>添加任务</ToDoAdd>
      <ToDo>
        {tasks.map((todo, index) => {
          return (
            <ToDoItem
              key={todo.id}
              isDone={todo.isDone}
              onChange={(e) => handleChange(todo)}
              onDelete={(e) => handleDelete(todo)}
            >
              {todo.content}
            </ToDoItem>
          );
        })}
      </ToDo>
      <CSSTransition in={showToDoInput} timeout={500} classNames="todo-input" unmountOnExit>
        <ToDoInput onChange={(task) => handleClick(false, task)}/>
      </CSSTransition>
    </div>
  );
}

export default App;
