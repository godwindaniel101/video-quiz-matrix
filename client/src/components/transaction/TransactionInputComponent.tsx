import React from 'react'
import { ITransactionDataResponseInput } from  '../../interface/ITransaction'
import { helpers } from '../../utils/helpers'
import { toBtc } from '../../utils/helpers'

//Input transaction component
const TransactionInputComponent = ({
  input,
}: {
  input: ITransactionDataResponseInput[]
}) => {
  const renderSubInput = () => {
    return input.map((unt) => {
      return (
        <div className="tf-unit-transaction" key={unt.script}>
          <a href="#">
            <span> {helpers(unt.witness, 34)}</span>
          </a>
          <p className="">
            <span className="amount">{toBtc(unt.sequence)} BTC</span>
            <i className="fas fa-globe"></i>
            <i className="fas fa-arrow-alt-right"></i>
          </p>
        </div>
      )
    })
  }
  return <React.Fragment>{renderSubInput()}</React.Fragment>
}

export default TransactionInputComponent
