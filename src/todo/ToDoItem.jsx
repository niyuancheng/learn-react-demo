export default function ToDoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        name="is-done"
        id="is-done"
        value={props.isDone}
        onChange={(E) => props.onChange(E)}
      />
      {props.isDone ? (
        <del style={{ color: "gray" }}>{props.children}</del>
      ) : (
        <span>{props.children}</span>
      )}
    </li>
  );
}
