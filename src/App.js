import React from 'react';
import { Route, Switch } from 'react-router' // react-router v4/v5
import HomeContainer from "./routes/Home/containers/HomeContainer";
import './App.css';

function App() {
	return (

		<div>
			<Switch>
				<Route path='/' component={HomeContainer} />
			</Switch>
		</div>

	);
}

export default App;
