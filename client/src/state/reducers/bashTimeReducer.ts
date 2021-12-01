
import { IBashTimeAction } from '../../interface/IBlock';
import { BASH_TIME } from '../../utils/constants.json'
import { getPastDaytime } from "../../utils/helpers";

const initialState = getPastDaytime()

const bashTimeReducer = (state = initialState, action: IBashTimeAction): number => {
    switch (action.type) {
        case BASH_TIME:
            return action.payload;
        default:
            return state
    }
}

export default bashTimeReducer