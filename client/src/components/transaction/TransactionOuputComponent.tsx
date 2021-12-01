import React from 'react'
import { ITransactionDataResponseOutput }  from '../../interface/ITransaction'
import { helpers } from '../../utils/helpers'
import { toBtc } from '../../utils/helpers'

//output transaction component
const TransactionOuputComponent = ({
  out,
}: {
  out: ITransactionDataResponseOutput[]
}) => {
  const renderSubOutput = () => {
    return out.map((unt) => {
      return (
        <div className="tf-unit-transaction" key={unt.addr}>
          <a href="#">
            <span> {helpers(unt.script, 34)}</span>
          </a>
          <p className="">
            <span className="amount">{toBtc(unt.value)} BTC</span>
            <i
              className={
                (unt.spent ? 'is_spent ' : 'is_saved ') + ' fas fa-globe'
              }
            ></i>
          </p>
        </div>
      )
    })
  }
  return <React.Fragment>{renderSubOutput()}</React.Fragment>
}

export default TransactionOuputComponent
