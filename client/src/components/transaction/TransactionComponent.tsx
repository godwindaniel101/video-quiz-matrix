import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../state";
import { RootState } from "../../state/reducers";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { timeStampToDate, timeStampToFullDate } from "../../utils/helpers";
import TransactionRowComponent from "./TransactionRowComponent";
import ReactPaginate from "react-paginate";
import { addComma } from "../../utils/helpers";
import { useHistory } from 'react-router-dom'

//transaction component
const TransactionComponent = () => {

  const history = useHistory()

  const dispatch = useDispatch();

  const { getTransacton } = bindActionCreators(actions, dispatch);

  let { transactionId } = useParams<{ transactionId: string }>();

  let hash: string = transactionId;

  useEffect(() => {
    getTransacton(history, hash);
  }, [dispatch]);


  function pageChange(selected: number) {
    getTransacton(history, transactionId, selected);
  }

  let transactionData = useSelector((state: RootState) => state.transaction);

  return (
    <div className="container tf-containter">
      <div className="tf-table-container">
        <div className="tf-table-header">
          <h3>
            Quick Block <span>({transactionData.block_index})</span>
          </h3>
          <Link to="/" className="tf-nav">
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div className="tf-table-detail">
          <p>
            This block was mined on {timeStampToFullDate(transactionData.time)} by ViaBTC. It currently has {transactionData.ver} confirmations on the Bitcoin blockchain.
          </p>
          <p>
            The miner(s) of this block earned a total reward of {transactionData.nonce} BTC ($ {addComma(transactionData.fee)}). The reward consisted of a base reward of {transactionData.nonce}
            BTC ($ {addComma(transactionData.nonce)}) with an additional
            {transactionData.fee} BTC ($ {addComma(transactionData.fee)}) reward
          </p>
          <p>paid as fees of the {transactionData.n_tx} transactions which were included in the block. The Block rewards, also known as the Coinbase reward, were sent to this address.</p>
        </div>
        <div className="tf-table-wrap">
          <table className="tf-table">
            <tbody>
              <tr>
                <td>Hash</td>
                <td>{transactionData.hash}</td>
              </tr>
              <tr>
                <td>Confirmations</td>
                <td>{transactionData.ver}</td>
              </tr>
              <tr>
                <td>Timestamp</td>
                <td>{timeStampToDate(transactionData.time)}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{transactionData.height}</td>
              </tr>
              <tr>
                <td>Miner</td>
                <td>{transactionData.hash}</td>
              </tr>
              <tr>
                <td>Number of Transactions</td>
                <td>{transactionData.n_tx}</td>
              </tr>
              <tr>
                <td>Difficulty</td>
                <td>{transactionData.hash}</td>
              </tr>
              <tr>
                <td>Merkle root</td>
                <td>{transactionData.mrkl_root}</td>
              </tr>
              <tr>
                <td>Bits</td>
                <td>{transactionData.bits}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{transactionData.weight}</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>{transactionData.size}</td>
              </tr>
              <tr>
                <td>Nonce</td>
                <td>{transactionData.nonce}</td>
              </tr>
              <tr>
                <td>Transaction volume</td>
                <td>{(Number(transactionData.size) / 3).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Block Reward</td>
                <td>{transactionData.block_index}</td>
              </tr>
              <tr>
                <td>Fee Reward</td>
                <td>{transactionData.fee}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tf-table-header">
          <h3>
            Transactions <i className="fas fa-exclamation-circle"></i>
          </h3>
        </div>
        <TransactionRowComponent transactions={transactionData.transactions} hashId={hash} />
        <ReactPaginate
          containerClassName={"pagination"}
          activeClassName="active"
          pageCount={transactionData.transactions.pageCount}
          pageRangeDisplayed={0}
          disableInitialCallback={true}
          marginPagesDisplayed={transactionData.transactions.limit}
          initialPage={0}
          onPageChange={({ selected }) => pageChange(selected)}
        />
      </div>
    </div>
  );
};
export default TransactionComponent;
