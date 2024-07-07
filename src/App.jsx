import "./App.css";

import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ToDo from "./todo/ToDo";
import ToDoItem from "./todo/ToDoItem";
import ToDoAdd from "./todo/ToDoAdd";
import ToDoInput from "./todo/ToDoInput";

function App() {
  const [showToDoInput, setShowToDoInput] = useState(false);
  const [todoList, setTodoList] = useState([
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
  ]);
  const nodeRef = useRef(null);

  const handleChange = (index) => {
    setTodoList(
      todoList.map((todo, i) => {
        if (index === i) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return {
            ...todo,
          };
        }
      })
    );
  };

  const handleClick = (value, task) => {
    setShowToDoInput(value); 
    if (task) {
      setTodoList([
        ...todoList,
        {
          content: task,
          id: todoList.length + 1,
          isDone: false
        }
      ])
    }
  }
  return (
    <div className="App" >
      <ToDoAdd onClick={() => handleClick(true)}>添加任务</ToDoAdd>
      <ToDo>
        {todoList.map((todo, index) => {
          return (
            <ToDoItem
              key={todo.id}
              isDone={todo.isDone}
              onChange={(e) => handleChange(index)}
            >
              {todo.content}
            </ToDoItem>
          );
        })}
      </ToDo>
      <CSSTransition in={showToDoInput} timeout={500} classNames="todo-input" ref={nodeRef} unmountOnExit>
        <ToDoInput onChange={(task) => handleClick(false, task)} ref={nodeRef}/>
      </CSSTransition>
    </div>
  );
}

export default App;
