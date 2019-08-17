import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { css } from '@emotion/core'
import query from '../../queries/fetchTransactionList'
import gql from 'graphql-tag'

class TransactionList extends Component {
  onTransactionDelete = (id) => {
    // eslint-disable-next-line react/prop-types
    this.props.mutate({ variables: { id } })
    // eslint-disable-next-line react/prop-types
      .then(() => this.props.data.refetch())
  }
  onTransactionEdit = (id) => {
    // eslint-disable-next-line react/prop-types
    this.props.mutate({ variables: { id } })
    // eslint-disable-next-line react/prop-types
      .then(() => this.props.data.refetch())
  }
  renderList = () => {
    // eslint-disable-next-line react/prop-types
    return this.props.data.transactions.reverse().map(transaction => {
      return (
        <li css={transactionItem} key={transaction.id}>
          <span css={transactionDetail}>UserId: {transaction.user_id} </span>
          <span css={transactionDetail}>Description: {transaction.description} </span>
          <span css={transactionDetail}>MerchantId: {transaction.merchant_id} </span>
          <span css={transactionDetail}>Amount: <span css={amount}>{transaction.amount}</span> </span>
          {/* eslint-disable-next-line react/jsx-sort-props */}
          <button css={transactionButton} onClick={() => this.onTransactionEdit(transaction.id)}>Edit</button>
          <button css={transactionButton} onClick={() => this.onTransactionDelete(transaction.id)}>Delete</button>
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

const mutation = gql`
  mutation DeleteTransaction($id: String) {
    deleteTransaction(id: $id) {
      id
    }
  }
`

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

const transactionButton = css`
  color: #000;
  border: 1px solid #000;
  border-radius: 10px;
  cursor: pointer;
  height: 30px;
  text-align: center;
  transition: transform .1s;
  &:hover {
    transform: scale(1.1)
  }
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

export default graphql(mutation)(
  graphql(query)(TransactionList)
)
