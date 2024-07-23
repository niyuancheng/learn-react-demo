export default function ToDoAdd(props) {
    return (
        <div>
            <button onClick={props.onClick}>{props.children}</button>
        </div>
    )
}