import { combineReducers } from "redux";
import resourceReducer from "./resourceReducers";
import markupReducer from "./markupReducers";

export default combineReducers({ resourceReducer, markupReducer });
