
import { IBlock, IBlockAction } from "../../interface/IBlock"
import { GET_ALL_BLOCKS } from '../../utils/constants.json'

const initialState: IBlock[] = [{
    block_index: 0,
    hash: '',
    height: 0,
    time: 0,
}];

const reducer = (state = initialState, action: IBlockAction): IBlock[] => {
    switch (action.type) {
        case GET_ALL_BLOCKS:
            return [...action.payload];
        default:
            return state
    }
}

export default reducer