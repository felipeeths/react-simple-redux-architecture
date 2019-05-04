import update from 'immutability-helper';
import constants from "./actionConstants";
const axios = require('axios');

const host = "https://evah-product-server.firebaseapp.com";
const business_id = "iQpJPOAvQ8HY8Rj53raI";
const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOnsiaXNzdWluZ19hZ2VuY3kiOiJzc3AiLCJudW1iZXIiOiIwNjk1MTI5NzkxNiJ9LCJlbWFpbCI6ImluZ29nYmU5MkBnbWFpbC5jb20iLCJuYW1lIjoiSW5nbyBHdWlsaGVybWUgQm90aCBFeW5nIn0.GU6TPX9Mk4kKcLU7OkXLmoSU-fKTJ8xzXpGU1kfO4M0"
const {
    GET_ORDERS
} = constants;


export function getOrders() {
    return (dispatch, store) => {
        axios.get(host + "/order/list/business/"+ business_id,{
            headers: {
                "Authorization": "Bearer " + auth
            }
        })
        .then(function (response) {
            // handle success
            dispatch({
                type: GET_ORDERS,
                payload: response.data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
     
    };
}

export function handleGetOrders(state, action) {
    return update(state, {
        orders: {
            $set: action.payload
        }
    })
}

const ACTION_HANDLERS = {
    GET_ORDERS: handleGetOrders
}

const initialState = {
    orders: {}
};

export function HomeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}