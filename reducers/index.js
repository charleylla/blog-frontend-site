import { combineReducers } from "redux";
import { article } from "./articleReducers";
import { component } from "./componentReducers";

export default combineReducers({
    article,
    component
});