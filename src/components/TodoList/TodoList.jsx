import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

const TodoList = ({}) => {
  function onFinished(todo, isfinished) {
    const updatelist = list.map((t) => {
      if (t.id === todo.id) {
        todo.finished = isfinished;
      }
      return t;
    });
    setList(updatelist);
  }

  function onDelete(todo) {
    const updatedList = list.filter((t) => t.id !== todo.id);
    setList(updatedList);
  }

  function onEdit(todo, todoText) {
    const updatedList = list.map((t) => {
      if (t.id === todo.id) {
        todo.todoData = todoText;
      }
      return t;
    });
    setList(updatedList);
  }
  const { list, setList } = useContext(TodoContext);
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todoData={todo.todoData}
            isfinished={todo.finished}
            changeFinished={(isfinished) => onFinished(todo, isfinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
};

export default TodoList;
