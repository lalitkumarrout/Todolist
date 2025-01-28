import React, { useState } from "react";

const AddTodo = ({ updateList }) => {
  const [inputText, setinputText] = useState("");
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
          updateList(inputText);
          setinputText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
