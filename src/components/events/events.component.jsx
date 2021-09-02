import { useState, useEffect } from "react";

const Events = () => {
	const [eventList, setEventList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/events")
			.then((response) => response.json())
			.then((json) => {
				setEventList(json);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	const noView = <div>You don't have any events</div>;

	const eventsView = (
		<div>
			{eventList.map((event, index) => {
				return (
					<div key={index}>
						{event.firstName},{event.lastName}
					</div>
				);
			})}
		</div>
	);

	return eventList.legth > 0 ? noView : eventsView;
};

export default Events;
