import React, { useState } from "react";

const Todo = ({ todoData, isfinished, changeFinished, onDelete, onEdit }) => {
  const [finished, setfinished] = useState(isfinished);
  const [isediting, setisediting] = useState(false);
  const [edittext, setedittext] = useState("");
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
      {isediting ? (
        <input
          type="text"
          value={edittext}
          onChange={(e) => setedittext(e.target.value)}
        />
      ) : (
        <span>{todoData}</span>
      )}
      <button
        onClick={() => {
          setisediting(!isediting);
          onEdit(edittext);
        }}
      >
        {!isediting ? "Edit" : "Save"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
