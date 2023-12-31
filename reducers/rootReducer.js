import { combineReducers } from "redux";
import authReducer from "./authReducer";
import plansReducer from "./plansReducer";
import taskReducer from "./taskReducer";
import signalsReducer from "./signalsReducer";
import dashboardReducer from "./dashboardReducer";
import performanceReducer from "./performanceReducer";
import portfolioReducer from "./portfolioReducer";
import connectReducer from "./connectReducer";
export default combineReducers({
  authReducer,
  plansReducer,
  taskReducer,
  signalsReducer,
  dashboardReducer,
  performanceReducer,
  portfolioReducer,
  connectReducer
});
