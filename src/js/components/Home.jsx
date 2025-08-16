import React, {useState} from "react";
import ToDoList from "./ToDoList";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");

	const [tasks, setTasks] = useState([]);

	const addTask = (newtask) =>{
		setTasks([...tasks, newtask]);
		setTask("");
	}

	return (
		<div className="row justify-content-center">
			<div className="col-8 text-center bg-dark text-white">
				<div className="row">
					<h1>TO DO LIST</h1>
				</div>
				<div className="row justify-content-center">
					<ToDoList/>
				</div>
			</div>
		</div>
	);
};

export default Home;