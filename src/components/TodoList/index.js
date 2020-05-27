import React, { useState } from 'react';

import './styles.scss';
import CreateItem from '../CreateItem';
import TodoItem from '../TodoItem';


const TodoList = () => {
    const [tasks, setTasks] = useState([
        {
            title: "Build todo React application",
            isCompleted: true
        },
        {
            title: "Do workout",
            isCompleted: true
        },
        {
            title: "Make a dinner",
            isCompleted: false
        }
    ]);

    const addItem = (item) => {
        setTasks([...tasks, { title: item, isCompleted: false }]);
    }

    const completeTask = (id) => {
        let newTasks = [...tasks];
        newTasks[id] = { ...newTasks[id], isCompleted: !newTasks[id].isCompleted };
        setTasks(newTasks);
    }

    const deleteTask = (id) => {
        let newTasks = [...tasks];
        newTasks.splice(id, 1);
        setTasks(newTasks);
    }

    return (
        <div className="todo-wrapper">
            <div className="todo-header-wrapper">
                <h4>TODO List</h4>
            </div>
            <CreateItem addItem={addItem} />
            <div className="todo-items-wrapper">
                {tasks.map((item, i) => (
                    <TodoItem
                        task={item.title}
                        isCompleted={item.isCompleted}
                        id={i}
                        key={i}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;