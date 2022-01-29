import { combineReducers } from "redux";
import uiReducer from "./ui";
import dataReducer from "./data";

const rootReducer = combineReducers({
  ui: uiReducer,
  data: dataReducer,
});
export default rootReducer;
