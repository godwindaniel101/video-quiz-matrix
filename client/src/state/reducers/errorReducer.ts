import { API_REQUEST_ERROR, CLEAR_ERRORS } from '../../utils/constants.json'

const initialState = {
    data: {}
};

const errorReducer = (state = initialState, action: { type: string, error: string }): any => {
    switch (action.type) {
        case API_REQUEST_ERROR:
            return {...state ,  error:action.error}
        case CLEAR_ERRORS:
            return {};
        default:
            return state;

    }
}
export default errorReducer