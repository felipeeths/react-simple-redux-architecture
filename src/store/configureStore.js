import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createBrowserHistory()
const log = createLogger({ diff: true, collapsed: true});

export default function configureStore(preloadedState = {}) {
    const middleware = [thunk,log,routerMiddleware(history)];

    const enhancers = [];

    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                ...middleware
            ),
            ...enhancers
        )
    );
    return store;
};