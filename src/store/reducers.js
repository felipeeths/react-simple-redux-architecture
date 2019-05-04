import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {routerReducer} from 'react-router-redux';
import { HomeReducer as home} from "../routes/Home/modules/home";

export const createRootReducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
        routerReducer,
        home
    })
}

export default createRootReducer;
