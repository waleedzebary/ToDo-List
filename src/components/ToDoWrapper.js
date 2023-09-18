import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./ToDo";
import { EditToDoForm } from "./EditToDoForm";

// Initialize the unique ID generator (uuidv4)
uuidv4();

export const ToDoWrapper = () => {
    // State to manage the list of to-do items
    const [todos, setTodo] = useState([]);

    // Function to add a new to-do item
    const addTodo = (todo) => {
        setTodo([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos);
    }

    // Function to toggle the completion status of a to-do item
    const toggleComplete = (id) => {
        setTodo(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    // Function to delete a to-do item
    const deleteTodo = (id) => {
        setTodo(todos.filter(todo => todo.id !== id))
    }

    // Function to toggle the edit mode of a to-do item
    const editTodo = (id) => {
        setTodo(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    // Function to edit the task of a to-do item
    const editTask = (task, id) => {
        setTodo(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditing ? (
                    // Render the edit form when in edit mode
                    <EditToDoForm editTodo={editTask} task={todo} key={todo.id} />
                ) : (
                    // Render the to-do item when not in edit mode
                    <ToDo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        EditingTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    )
}
