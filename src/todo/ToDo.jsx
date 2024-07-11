import { useCallback, useMemo } from "react";
import { TodoContext } from "../shared/context";

export default function Todo(props) {
  const onChange = useCallback((todo) => {
    props.onChange(todo);
  }, []);
  const onDelete = useCallback((todo) => {
    props.onDelete(todo);
  }, []);

  const todoObj = useMemo(() => ({
    onChange,
    onDelete
  }), [onDelete, onChange])

  return (
    <TodoContext.Provider value={todoObj}>
      <ul style={{ listStyle: "none" }}>
        {props.children}
      </ul>
    </TodoContext.Provider>
  );
}
