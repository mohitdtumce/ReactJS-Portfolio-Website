import * as constants from "../../constants";

export const fetchData = () => 
    dispatch => 
        fetch(`data.json`)
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: constants.FETCH_DATA,
                payload: response
            })
        })
