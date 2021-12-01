
import { PaginationResponse, IActionPaginate } from '../../interface/IPaginate';
import { PAGINATION } from '../../utils/constants.json'

const initialState: PaginationResponse = {
    pagination: {
        totalCount: 20,
        limit: 10,
        page: 0,
        initialPage: 100,
        pageCount: 0,
        pageRangeDisplayed: 20
    },
};

const paginateReducer = (state = initialState, action: IActionPaginate): PaginationResponse => {
    switch (action.type) {
        case PAGINATION:
            return { ...state, pagination: action.pagination };
        default:
            return state
    }
}
export default paginateReducer