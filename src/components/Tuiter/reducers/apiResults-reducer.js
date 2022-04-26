import {API_RESULTS} from "../../actions/actions";
const apiReducers = (state = [], action) => {
    switch (action.type) {
        case API_RESULTS:
            return action.results;
        default:
            return state;
    }
}
export default apiReducers