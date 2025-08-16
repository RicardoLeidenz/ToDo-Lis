import React, {useState} from "react";

//create your first component
const ToDoList = () => {
    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState([]);

    const addTask = (newtask) =>{
        setTasks([...tasks, newtask]);
        setTask("");
    }

    return (
        <div className="col-5">
            <input type="text" onChange={e => setTask(e.target.value)} value={task} /
            ><button onClick={() => {addTask(task)}} type="button" className="btn btn-primary">Add task</button>
            <ul>
                {tasks.map((taskInList,index)=>{
                        return (
                            <li key={index}>{taskInList}</li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};

export default ToDoList;