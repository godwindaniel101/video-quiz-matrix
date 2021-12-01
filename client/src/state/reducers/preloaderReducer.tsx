import { IActionPreLoader, PreLoaderResponse } from "../../interface/IPreloader";
import { PRELOADER, BLOCK_TABLE_PRELOADER } from "../../utils/constants.json";

const initialState: PreLoaderResponse = {
  loading: true,
};

export const preloaderReducer = (state = initialState, action: IActionPreLoader): PreLoaderResponse => {
  switch (action.type) {
    case PRELOADER:
      return { loading: action.loading };
    default:
      return state;
  }
};

export const blockloaderReducer = (state = initialState, action: IActionPreLoader): PreLoaderResponse => {
  switch (action.type) {
    case BLOCK_TABLE_PRELOADER:
      return { loading: action.loading };
    default:
      return state;
  }
};

export const transactionloaderReducer = (state = initialState, action: IActionPreLoader): PreLoaderResponse => {
  switch (action.type) {
    case PRELOADER:
      return { loading: action.loading };
    default:
      return state;
  }
};
