import { combineReducers } from "redux";

// Importing Reducers
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    data:dataReducer
});

export default rootReducer;