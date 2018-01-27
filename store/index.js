import { createStore,applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "@reducers"; 

const store = (initialState, options) => {
	return createStore(reducer, initialState);
}

export default store;