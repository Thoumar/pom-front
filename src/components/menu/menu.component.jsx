import "./menu.sass";

import ContactsIcon from "./../../icons/contacts.svg";
import EventsIcon from "./../../icons/events.svg";
import GoalsIcon from "./../../icons/goals.svg";
import HabitsIcon from "./../../icons/habits.svg";
import TasksIcon from "./../../icons/tasks.svg";

import { Link } from "react-router-dom";

const Menu = () => (
	<nav className="Menu">
		<ul className="Menu__List">
			<li className="Menu__Item">
				<Link to="/contacts">
					<img src={ContactsIcon} alt="Contacts Icon" />
					<span>Contacts</span>
				</Link>
			</li>
			<li className="Menu__Item">
				<Link to="/events">
					<img src={EventsIcon} alt="Events Icon" />
					<span>Events</span>
				</Link>
			</li>
			<li className="Menu__Item">
				<Link to="/goals">
					<img src={GoalsIcon} alt="Goals Icon" />
					<span>Goals</span>
				</Link>
			</li>
			<li className="Menu__Item">
				<Link to="/habits">
					<img src={HabitsIcon} alt="Habits Icon" />
					<span>Habits</span>
				</Link>
			</li>
			<li className="Menu__Item">
				<Link to="/tasks">
					<img src={TasksIcon} alt="Tasks Icon" />
					<span>Tasks</span>
				</Link>
			</li>
		</ul>
	</nav>
);

export default Menu;
