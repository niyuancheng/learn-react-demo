export default function ToDoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        name="is-done"
        id="is-done"
        value={props.isDone}
        checked={props.isDone}
        onChange={(E) => props.onChange(E)}
      />
      {props.isDone ? (
        <del style={{ color: "gray", cursor: 'pointer', userSelect: 'none' }} onClick={(E) => props.onChange(E)}>{props.children}</del>
      ) : (
        <span style={{cursor: 'pointer', userSelect: 'none' }} onClick={(E) => props.onChange(E)}>{props.children}</span>
      )}
      <div style={{display: 'inline-block', marginLeft: '10px'}}>
        <button className="edit" onClick={props.onEdit}>编辑</button>
        <button className="delete" style={{marginLeft: '5px'}} onClick={props.onDelete}>删除</button>
      </div>
    </li>
  );
}
