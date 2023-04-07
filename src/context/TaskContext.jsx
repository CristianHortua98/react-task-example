import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/task';

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {

        setTasks([...tasks, {
            title: task.title,
            id: tasks.length + 1,
            description: task.description
        }])

    }

    useEffect(() => {

        setTasks(data)

    }, [])

    function deleteTask(taskId) {

        setTasks(tasks.filter(task => task.id !== taskId));

    }

    return (

        <TaskContext.Provider value={{

            tasks,
            deleteTask,
            createTask

        }}>
            {props.children}
        </TaskContext.Provider>

    )
}
