import React from 'react';
import {Provider} from 'react-redux';
import configureStore,  { history } from './store/configureStore';
import { Route, Switch } from 'react-router' // react-router v4/v5
import HomeContainer from "./routes/Home/containers/HomeContainer";
import { ConnectedRouter } from 'connected-react-router'
import logo from './logo.svg';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
       <ConnectedRouter history={history}>
	   		<div>
			   <Switch>
			   		<Route path='/' component={HomeContainer} />
			   </Switch>
			</div>
       </ConnectedRouter>
	</Provider>
  );
}

export default App;
