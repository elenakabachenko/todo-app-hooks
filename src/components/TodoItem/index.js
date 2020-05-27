import React from 'react';
import './styles.scss';
import { CheckMark, DeleteIcon } from '../svg-icon';


const TodoItem = ({ id, task, isCompleted, completeTask, deleteTask }) => {
    return (
        <div className="todo-item-wrapper">
            <label className={`todo-item ${isCompleted ? 'task-completed' : ''}`}>
                {task}
                <input className="todo-item-checkbox" type="checkbox" name={`prop${id}`} value={id} checked={isCompleted} onChange={() => completeTask(id)} />
                <div className="todo-item-checkmark">
                    <span>
                        <CheckMark />
                    </span>
                </div>
            </label>
            <button className="todo-item-delete-btn" onClick={() => deleteTask(id)}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default TodoItem;