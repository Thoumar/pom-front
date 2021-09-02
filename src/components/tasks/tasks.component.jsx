import { useState, useEffect } from "react";

const Tasks = () => {
	const [taskList, setHabitList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/tasks")
			.then((response) => response.json())
			.then((json) => {
				setHabitList(json);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	const noView = <div>You don't have any tasks</div>;

	const tasksView = (
		<div>
			{taskList.map((task, index) => {
				return (
					<div key={index}>
						{task.firstName},{task.lastName}
					</div>
				);
			})}
		</div>
	);

	return taskList.legth > 0 ? noView : tasksView;
};

export default Tasks;
