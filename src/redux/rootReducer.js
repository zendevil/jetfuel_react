import { combineReducers } from "redux";
import chatReducer from "./Chat/chat.reducer";

const rootReducer = combineReducers({
  counter: chatReducer,
});

export default rootReducer;
