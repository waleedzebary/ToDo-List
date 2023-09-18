import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({ task, toggleComplete, deleteTodo, EditingTodo }) => {
    return (
        <div className='Todo'>
            {/* Clicking on the task text triggers the toggleComplete function */}
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>
                {task.task}
            </p>
            <div>
                {/* Clicking on the pen icon triggers the EditingTodo function */}
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => EditingTodo(task.id)} />
                {/* Clicking on the trash icon triggers the deleteTodo function */}
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}
