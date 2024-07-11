import { useContext } from "react";
import { TodoContext } from "../shared/context";

export default function ToDoItem(props) {
  const {onChange, onDelete, onEdit} = useContext(TodoContext);
  const {item, children, isDone} = props;
  return (
    <li>
      <input
        type="checkbox"
        name="is-done"
        id="is-done"
        value={isDone}
        checked={isDone}
        onChange={(E) => onChange(item)}
      />
      {isDone ? (
        <del style={{ color: "gray", cursor: 'pointer', userSelect: 'none' }} onClick={(E) => onChange(item)}>{children}</del>
      ) : (
        <span style={{cursor: 'pointer', userSelect: 'none' }} onClick={(E) => onChange(item)}>{children}</span>
      )}
      <div style={{display: 'inline-block', marginLeft: '10px'}}>
        <button className="edit" onClick={() => onEdit(item)}>编辑</button>
        <button className="delete" style={{marginLeft: '5px'}} onClick={() => onDelete(item)}>删除</button>
      </div>
    </li>
  );
}
