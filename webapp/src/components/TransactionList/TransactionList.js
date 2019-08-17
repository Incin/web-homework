import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { css } from '@emotion/core'
import query from '../../queries/fetchTransactionList'

class TransactionList extends Component {
  renderList = () => {
    // eslint-disable-next-line react/prop-types
    return this.props.data.transactions.reverse().map(transaction => {
      return (
        <li css={transactionItem} key={transaction.id}>
          <span css={transactionDetail}>UserId: {transaction.user_id} </span>
          <span css={transactionDetail}>Description: {transaction.description} </span>
          <span css={transactionDetail}>MerchantId: {transaction.merchant_id} </span>
          <span css={transactionDetail}>Amount: <span css={amount}>{transaction.amount}</span> </span>
        </li>
      )
    })
  }
  render () {
    // eslint-disable-next-line react/prop-types
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }
    return (
      <>
        <ul css={listContainer}>
          <div css={keyContainer}>
            <div css={creditContainer}>
              <div>Credit</div>
              <div css={squareGreen} />
            </div>
            <div css={creditContainer}>
              <div>Debit</div>
              <div css={squareRed} />
            </div>
          </div>
          {this.renderList()}
        </ul>
      </>
    )
  }
}

const listContainer = css`
  display: flex;
 justify-content: center;
 flex-direction: column;
 background-color: #fff;
 padding: 40px;
 margin: 40px;
 border-radius: 20px;
 max-width: 800px;
 list-style: none;
`

const transactionItem = css`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid #a8a8a8;
  border-radius: 6px;
  margin: 10px 20px 10px 5px;
  padding: 5px 20px;
`

const transactionDetail = css`
  margin: 0 10px;
  width: 25%;
  text-align: left;
`

const amount = css`
color: green;
`

const keyContainer = css`
  display:flex;
  justify-content: center;
  
`

const creditContainer = css`
  display: flex;
  margin: 15px;
`

const squareGreen = css`
  background-color: green;
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid black;
`

const squareRed = css`
  background-color: red;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  border: 1px solid black;
`

export default graphql(query)(TransactionList)
