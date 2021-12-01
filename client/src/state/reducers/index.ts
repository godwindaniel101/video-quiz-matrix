import { combineReducers } from "redux";
import blockReducer from "./blockReducer"
import paginateReducer from "./paginateReducer";
import transactionReducer from "./transactionReducer";
import errorReducer from "./errorReducer";
import bashTimeReducer from "./bashTimeReducer";
import { preloaderReducer } from "./preloaderReducer"
import { blockloaderReducer } from "./preloaderReducer"
import { transactionloaderReducer } from "./preloaderReducer"


const reducers = combineReducers({
    block: blockReducer,
    preloader: preloaderReducer,
    blockpreloader: blockloaderReducer,
    transactionpreloader: transactionloaderReducer,
    paginate: paginateReducer,
    transaction: transactionReducer,
    error: errorReducer,
    bashtime: bashTimeReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>