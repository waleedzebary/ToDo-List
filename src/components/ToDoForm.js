import React, { useState } from "react";

// The ToDoForm component represents the input form for adding new tasks.
// It receives the 'addTodo' function as a prop to add a new task to the list.
export const ToDoForm = ({ addTodo }) => {
  // State to store the input value
  const [value, setValue] = useState("");

  // Event handler for input value changes
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the 'addTodo' function to add the new task
    addTodo(value);
    // Clear the input field
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      {/* Input field for entering task text */}
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={handleChange}
      />
      {/* Submit button to add the task */}
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
