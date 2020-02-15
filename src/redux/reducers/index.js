import { combineReducers } from "redux";
import userList from "./userList";
import details from "./details";

const reducers = combineReducers({
  userList,
  details
});

export default reducers;
