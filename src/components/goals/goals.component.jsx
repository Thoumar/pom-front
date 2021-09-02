import { useState, useEffect } from "react";

const Goals = () => {
	const [goalList, setGoalList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/goals")
			.then((response) => response.json())
			.then((json) => {
				setGoalList(json);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	const noView = <div>You don't have any goals</div>;

	const goalsView = (
		<div>
			{goalList.map((goal, index) => {
				return (
					<div key={index}>
						{goal.firstName},{goal.lastName}
					</div>
				);
			})}
		</div>
	);

	return goalList.legth > 0 ? noView : goalsView;
};

export default Goals;
