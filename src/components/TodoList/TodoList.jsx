import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({list}) => {

  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => <Todo key={todo.id} todoData={todo.todoData} />)}
    </div>
  );
};

export default TodoList;
