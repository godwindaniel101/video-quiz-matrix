import { ITransactionResponse, IActionTransaction, ITransactionDataResponse, ITransactionObjectResponse, ITransactionDataResponseInput, ITransactionDataResponseOutput } from "../../interface/ITransaction";
import { GET_UNIT_BLOCK } from "../../utils/constants.json";

const inputsData: ITransactionDataResponseInput = {
  sequence: 0,
  witness: "",
  script: "",
  index: 0,
  prev_out: "",
};

const outputData: ITransactionDataResponseOutput = {
  type: 0,
  spent: false,
  value: 0,
  n: 0,
  tx_index: 0,
  script: "",
  addr: "",
};

const transactionData: ITransactionDataResponse = {
  hash: "",
  ver: 0,
  vin_sz: 0,
  vout_sz: 0,
  size: 0,
  weight: 0,
  fee: 0,
  relayed_by: 0,
  lock_time: 0,
  tx_index: 0,
  double_spend: false,
  time: 0,
  block_index: 0,
  block_height: 0,
  inputs: [inputsData],
  out: [outputData],
};

const transactions: ITransactionObjectResponse = {
  totalCount: 0,
  pageCount: 0,
  limit: 0,
  page: 0,
  data: [transactionData],
};

const initialState: ITransactionResponse = {
  hash: "",
  ver: 0,
  prev_block: "",
  mrkl_root: "",
  time: "",
  bits: "",
  next_block: [""],
  fee: "",
  nonce: "",
  n_tx: "",
  size: "",
  block_index: "",
  main_chain: false,
  height: "",
  weight: "",
  transactions,
};

const transactionReducer = (state = initialState, action: IActionTransaction): ITransactionResponse => {
  switch (action.type) {
    case GET_UNIT_BLOCK:
      return {
        ...state,
        hash: action.payload.hash,
        ver: action.payload.ver,
        prev_block: action.payload.prev_block,
        mrkl_root: action.payload.mrkl_root,
        time: action.payload.time,
        bits: action.payload.bits,
        next_block: action.payload.next_block,
        fee: action.payload.fee,
        nonce: action.payload.nonce,
        n_tx: action.payload.n_tx,
        size: action.payload.size,
        block_index: action.payload.block_index,
        main_chain: action.payload.main_chain,
        height: action.payload.height,
        weight: action.payload.weight,
        transactions: action.payload.transactions,
      };
    default:
      return state;
  }
};

export default transactionReducer;
