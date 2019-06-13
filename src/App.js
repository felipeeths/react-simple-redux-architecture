import React from 'react';
import { Route, Switch } from 'react-router' // react-router v4/v5
import HomeContainer from "./routes/Home/containers/HomeContainer";
import './App.css';

class App extends Component {
	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	};

	render() {
			return (

			<div>
				<Switch>
					<Route path='/' component={HomeContainer} />
				</Switch>
			</div>

		);
	}
}

export default App;
