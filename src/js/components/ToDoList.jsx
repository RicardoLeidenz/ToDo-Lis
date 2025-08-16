import React, {useState} from "react";

//create your first component
const ToDoList = () => {
    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState([]);

    const addTask = (newtask) =>{
        if(newtask != ""){
            setTasks([...tasks, newtask]);
            setTask("");
        }
    }

    return (
        <div className="col-5">
            <input type="text" onChange={e => setTask(e.target.value)} onSubmit={addTask(task)} value={task} />
            <button onClick={() => {addTask(task)}} type="button" className="btn btn-primary">Add task</button>
            <ul className="list-group mt-5">
                {tasks.map((taskInList,index)=>{
                        return (
                            <li className="list-group-item p-auto" key={index}>
                                <div className="container-fluid">
                                    <p className="float-start">{taskInList}</p>
                                    <p className="float-end">X</p>
                                </div>
                            </li>
                        );
                    }
                )}
                <li className="list-group-item p-auto">
                                <div className="container-fluid">
                                    <p className="float-start">{tasks.length} Items left</p>
                                </div>
                            </li>
            </ul>
        </div>
    );
};

export default ToDoList;