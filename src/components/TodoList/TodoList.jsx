import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

const TodoList = ({}) => {
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
            changeFinished={(isfinished) => {
              const updatelist = list.map((t) => {
                if (t.id === todo.id) {
                  todo.finished = isfinished;
                }
                return t;
              });
              setList(updatelist);
            }}
            onDelete={() => {
              const updatedList = list.filter((t) => t.id !== todo.id);
              setList(updatedList);
            }}
          />
        ))}
    </div>
  );
};

export default TodoList;
