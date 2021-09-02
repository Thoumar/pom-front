import { useState, useEffect } from "react";

const Habits = () => {
	const [habitList, setHabitList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/habits")
			.then((response) => response.json())
			.then((json) => {
				setHabitList(json);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	const noView = <div>You don't have any habits</div>;

	const habitsView = (
		<div>
			{habitList.map((habit) => {
				return (
					<div>
						{habit.firstName},{habit.lastName}
					</div>
				);
			})}
		</div>
	);

	return habitList.legth > 0 ? noView : habitsView;
};

export default Habits;
