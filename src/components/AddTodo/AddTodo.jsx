import React, { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

const AddTodo = () => {
  const [inputText, setinputText] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);
  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="add your next Todo"
        onChange={(e) => setinputText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add_todo", payload: { todoText: inputText } });
          setinputText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
