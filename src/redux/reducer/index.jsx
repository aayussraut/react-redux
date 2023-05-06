import { combineReducers } from "redux";
import countReduer from "./count-reducer";
import blogReducer from "./BlogReducer";
const rootReducer = combineReducers({
  count: countReduer,
  blog: blogReducer,
});

export default rootReducer;
