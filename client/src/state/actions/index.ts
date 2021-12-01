import { Dispatch } from "redux";
import { IResponse } from "../../interface/IActions";
import { GET_ALL_BLOCKS, GET_UNIT_BLOCK, API_REQUEST_ERROR, PRELOADER, PAGINATION, BLOCK_TABLE_PRELOADER, BASH_TIME } from "../../utils/constants.json";
import axios from "axios";
import { RootState } from "../reducers";
import { History } from "history";
import { getApiErrorMessage } from "../../utils/helpers";
import { IError } from "../../interface/IError";
/**
 *
 * @param page
 * @param isAstaticCall
 * @returns
 */

const backend_url: string = process.env.REACT_APP_NOT_SECRET_CODE || "http://localhost:3200/api/v1/";

//gets all blocks
export const getBlocks =
  (history: History, page: number = 0, isAstaticCall = false) =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    if (!isAstaticCall) {
      dispatch({ type: PRELOADER, loading: true });
    }

    dispatch({ type: BLOCK_TABLE_PRELOADER, loading: true });

    try {
      let {
        paginate: { pagination },
      } = getState();

      let { bashtime } = getState();

      console.log(backend_url);

      const url: string = `${backend_url}blockchain/blocks/${bashtime}?page=${page}&limit=${pagination.limit}`;

      let { data }: IResponse = await axios.get(url);

      let payload = data?.data.data;

      let paginatoion_response = {
        totalCount: data?.data.totalCount,
        limit: data?.data.limit,
        page: data?.data.page,
        
      };

      dispatch({ type: PAGINATION, pagination: paginatoion_response });
      dispatch({ type: GET_ALL_BLOCKS, payload });
    } catch (error) {
      dispatch({ type: API_REQUEST_ERROR, error: getApiErrorMessage(error as IError) });
      history.push("/error");
    }

    dispatch({ type: PRELOADER, loading: false });
    dispatch({ type: BLOCK_TABLE_PRELOADER, loading: false });
  };
/**
 *
 * @param transactionId
 * @param page
 * @returns
 */
//gets transaction for blocks
export const getTransacton =
  (history: History, transactionId: string, page: number = 0) =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({ type: PRELOADER, loading: true });
    try {
      const url = `${backend_url}blockchain/${transactionId}?page=${page}&limit=${3}`;

      let { data }: IResponse = await axios.get(url);

      let payload = data?.data;

      dispatch({ type: GET_UNIT_BLOCK, payload: payload });
    } catch (error) {
      dispatch({ type: API_REQUEST_ERROR, error: getApiErrorMessage(error as IError) });
      history.push("/error");
    }
    dispatch({ type: PRELOADER, loading: false });
  };
/**
 *
 * @param milieseconds
 *
 * @returns
 */
// set block time i.e duration for which you want to query data
export const setBashTime = (milieseconds: number) => async (dispatch: Dispatch) => {
  dispatch({ type: BASH_TIME, payload: milieseconds });
};
/**
 *
 * @param loading
 *
 * @returns
 */
//toggle preloader
export const callPageLoader =
  (loading: boolean = true) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: PRELOADER, loading: loading });
  };
