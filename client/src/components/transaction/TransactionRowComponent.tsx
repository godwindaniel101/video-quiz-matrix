import React from "react";
import { ITransactionObjectResponse } from "../../interface/ITransaction";
import { helpers } from "../../utils/helpers";
import { timeStampToDate } from "../../utils/helpers";
import TransactionInputComponent from "./TransactionInputComponent";
import TransactionOuputComponent from "./TransactionOuputComponent";
import "../../assets/css/pagination.css";

//transaction component unit row
const TransactionRowComponent = ({ transactions, hashId }: { transactions: ITransactionObjectResponse; hashId: string }) => {

  const renderView = (): JSX.Element[] => {
    return transactions.data.map((transaction) => {
      return (
        <div className="tf-transactions" key={transaction.hash}>
          <div className="tf-transactions-item" key={transaction.hash}>
            <div className="tf-transactions-item-sub first">
              <div className="tf-item-title">Fee</div>
              <div className="tf-item-body">
                <span>{transaction.block_index} BTC </span>
                <span>
                  {" "}
                  ({transaction.vin_sz} sat/B - {transaction.vout_sz} sat/WU - {transaction.size} bytes)
                </span>
                <span>
                  {" "}
                  ({transaction.size} sat/vByte - {transaction.vout_sz} virtual bytes){" "}
                </span>
              </div>
            </div>
            <div className="tf-transactions-item-sub second">
              <div className="tf-item-title"> </div>
              <div className="tf-item-body">
                <button className="light">{transaction.block_index} BTC </button>
                <span className="dark">{transaction.ver} Confirmations</span>
              </div>
            </div>
            <div className="tf-transactions-item-full">
              <div className="tf-item-title">Hash</div>
              <div className="tf-item-body">
                <a href="#">{helpers(transaction.hash, 50)}</a>
                <span>{timeStampToDate(transaction.time)}</span>
              </div>
            </div>
            <div className="tf-transactions-item-sub third">
              <div className="tf-item-title"></div>
              <div className="tf-item-body">
                <TransactionInputComponent input={transaction.inputs} />
              </div>
            </div>
            <div className="tf-transactions-item-sub four">
              <div className="tf-item-title"></div>
              <div className="tf-item-body">
                <TransactionOuputComponent out={transaction.out} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      {renderView()}
    </React.Fragment>
  );
};

export default TransactionRowComponent;
