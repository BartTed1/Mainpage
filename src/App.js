import React from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
				<Switch>
					<Route path="/">
						<Home />
						<Projects />
					</Route>
				</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
