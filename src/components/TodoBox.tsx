import { useState } from 'react'

interface TaskType {
    _id: string;
    name: string;
}


const TodoBox = () => {

    const [task, setTask] = useState<TaskType[] | []>([])


    const handleAddTask = () => {

        const taskName = prompt("Enter Task Name");

        if (!taskName) {
            alert("Empty Field is not Required");

            return;
        }

        const newTask: TaskType = {
            _id: String(task.length + 1),
            name: taskName
        };

        setTask((preTask) => {
            return (
                [
                    ...preTask,
                    newTask
                ]
            )
        })
    };

    const handleEditTaks = (SelectedTask: TaskType) => {

        const taskName = prompt("Enter Changed Name");

        if (!taskName) {
            alert("Empty Field is not Required");

            return;
        };

        const newTask: TaskType = {
            _id: SelectedTask._id,
            name: taskName
        };


        const updatedTask = task.map((val) => {
            if (val._id === newTask._id) {
                return newTask
            }

            return val
        });

        setTask(updatedTask)


    };

    const handleDeleteTask = (SelectedTask: TaskType) => {
        const updatedTask = task.filter((tk) => {
            return tk._id !== SelectedTask._id
        });


        setTask(updatedTask);
    }


    return (
        <div className='container' >
            <h1>Todo</h1>

            <div>
                <button
                    onClick={handleAddTask}
                >Add</button>
            </div>


            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </thead>
                {
                    task && task.length > 0 ?
                        task.map((tk, index) => (
                            <tbody>
                                <td>{index + 1}</td>
                                <td>{tk.name}</td>
                                <td>
                                    <button onClick={() => handleEditTaks(tk)} >Edit</button>
                                    <button onClick={() => handleDeleteTask(tk)}  >Delete</button>
                                </td>
                            </tbody>
                        ))

                        :

                        <p>No Task Found</p>
                }
            </table>


        </div>
    )
}

export default TodoBox