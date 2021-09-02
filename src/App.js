import Home from "./home.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.sass";

import Menu from "./components/menu/menu.component";

import Contacts from "./components/contacts/contacts.component";
import Events from "./components/events/events.component";
import Goals from "./components/goals/goals.component";
import Habits from "./components/habits/habits.component";
import Tasks from "./components/tasks/tasks.component";

const Header = () => {
	return <header className="Header"></header>;
};

const App = () => (
	<div className="App">
		<Header />
		<Router>
			<Menu />
			<main className="Main">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/contacts">
						<Contacts />
					</Route>
					<Route path="/events">
						<Events />
					</Route>
					<Route path="/goals">
						<Goals />
					</Route>
					<Route path="/habits">
						<Habits />
					</Route>
					<Route path="/tasks">
						<Tasks />
					</Route>
				</Switch>
			</main>
		</Router>
	</div>
);

export default App;
