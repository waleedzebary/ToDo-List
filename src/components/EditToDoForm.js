import React, { useState } from "react";

// The EditToDoForm component represents the form for editing an existing task.
// It receives the 'editTodo' function and 'task' object as props.
export const EditToDoForm = ({ editTodo, task }) => {
    // State to store the updated task value
    const [value, setValue] = useState("");

    // Event handler for input value changes
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // Event handler for form submission
    const handleSubmit = e => {
        e.preventDefault();
        // Call the 'editTodo' function to update the task
        editTodo(value, task.id);
        // Clear the input field
        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            {/* Input field for updating the task */}
            <input type="text" className="todo-input" value={value} placeholder="Update Task" onChange={handleChange} />
            {/* Submit button to update the task */}
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}
