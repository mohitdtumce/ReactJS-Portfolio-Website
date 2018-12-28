import * as constants from "../../constants";

const INITIAL_STATE = {
    experience: [],
    education: [],
    responsibility: [],
    awards: [],
    projects: []
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.FETCH_DATA:
            state = {
                ...state,
                experience: action.payload.experience,
                education: action.payload.education,
                responsibility: action.payload.responsibility,
                awards: action.payload.awards,
                projects: action.payload.projects
            }
            break;
        default:
            break;
    }
    return state;
};

export default dataReducer;
