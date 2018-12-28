import { combineReducers } from "redux";

// Importing Reducers
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    dataReducer:dataReducer
});

export default rootReducer;