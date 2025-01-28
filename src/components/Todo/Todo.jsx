import React, { useState } from "react";

const Todo = ({ todoData, isfinished, changeFinished }) => {
  const [finished, setfinished] = useState(isfinished);
  return (
    <div>
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setfinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      {todoData}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
