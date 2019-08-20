import React, { Component } from 'react'
import gql from 'graphql-tag'
import { css } from '@emotion/core'
import { graphql } from 'react-apollo'
import query from '../../queries/fetchTransactionList'
import { Link } from 'react-router-dom'

class EditTransaction extends Component {
  state = {
    // eslint-disable-next-line react/prop-types
    id: this.props.id,
    // eslint-disable-next-line react/prop-types
    userId: this.props.userId,
    // eslint-disable-next-line react/prop-types
    description: this.props.description,
    // eslint-disable-next-line react/prop-types
    merchantId: this.props.merchantId,
    // eslint-disable-next-line react/prop-types
    creditOrDebit: '',
    // eslint-disable-next-line react/prop-types
    credit: this.props.credit,
    // eslint-disable-next-line react/prop-types
    debit: this.props.debit,
    // eslint-disable-next-line react/prop-types
    amount: this.props.amount
  }

  componentDidMount () {
    if (this.state.credit === true) {
      this.setState({
        creditOrDebit: 'credit'
      })
    }
    if (this.state.debit === true) {
      this.setState({
        creditOrDebit: 'debit'
      })
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  changeHandlerRadio = event => {
    this.setState({
      creditOrDebit: event.target.value
    })
    if (this.state.creditOrDebit === 'credit') {
      this.setState({
        debit: false,
        credit: true
      })
    } else {
      this.setState({
        credit: false,
        debit: true
      })
    }
  }
  submitHandler = event => {
    event.preventDefault()
    // eslint-disable-next-line react/prop-types
    this.props.mutate({
      variables: {
        user_id: this.state.userId,
        description: this.state.description,
        merchant_id: this.state.merchantId,
        debit: this.state.debit,
        credit: this.state.credit,
        amount: parseFloat(this.state.amount)
      },
      refetchQueries: [{ query }]
    })
    this.resetFormHandler()
  };
  resetFormHandler = () => {
    this.setState({
      userId: '',
      description: '',
      merchantId: '',
      creditOrDebit: 'credit',
      credit: true,
      debit: false,
      amount: 0
    })
  }

  render () {
    return (
      <>
        <div css={transactionForm}>
          <form onSubmit={this.submitHandler}>
            <label css={formItemTitle}>UserId
              <input name='userId' onChange={this.changeHandler} required type='text' value={this.state.userId} />
            </label>
            <label css={formItemTitle}>Transaction Description
              <input name='description' onChange={this.changeHandler} required type='text' value={this.state.description} />
            </label>
            <label css={formItemTitle}>Merchant Id
              <input name='merchantId' onChange={this.changeHandler} required type='text' value={this.state.merchantId} />
            </label>
            <label css={formItemTitle}>Enter Amount
              <input name='amount' onChange={this.changeHandler} required step='any' type='number' value={this.state.amount} />
            </label>
            <label css={formItemTitleC}>Credit?
              <input checked={this.state.creditOrDebit === 'credit'} onChange={this.changeHandlerRadio} type='radio' value='credit' />
            </label>
            <label css={formItemTitleC}>Or Debit?
              <input checked={this.state.creditOrDebit === 'debit'} onChange={this.changeHandlerRadio} type='radio' value='debit' />
            </label>
            <div css={buttonContainer}>
              <button css={submitButton} onClick={this.changeHandlerRadio} type='submit'>Submit</button>
              <button css={returnButton}><Link to='/'>Home</Link></button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

const mutation = gql`
  mutation EditTransaction($id: String, $user_id: String, $description: String, $merchant_id: String, $debit: Boolean, $credit: Boolean, $amount: Float) {
    editTransaction(
      id: $id,
      user_id: $user_id,
      description: $description,
      merchant_id: $merchant_id,
      debit: $debit,
      credit: $credit,
      amount: $amount
    ) {
      amount
    }
  }
`

const transactionForm = css`
 display: flex;
 justify-content: center;
 flex-direction: column;
 background-color: #fff;
 padding: 40px;
 margin: 40px;
 border-radius: 20px;
 max-width: 400px;

 & input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  font-size: 1rem;
  border: 4px solid #3a7bd5;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border-radius: 4px;
}

& input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  font-size: 1rem;
  border: 4px solid #3a7bd5;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

const formItemTitle = css`
 font-size: 2rem;
 color: #a8a8a8;
`

const formItemTitleC = css`
 font-size: 2rem;
 color: #a8a8a8;
 margin-left: 7%;
`

const buttonContainer = css`
 display: flex;
 justify-content: center;
 flex-direction: column;
`
const returnButton = css`
  height: 30px;
  border: 0;
  padding: 0;
  margin: 30px;
  transition: transform .1s;
  &:focus {
    outline: 0;
  }
  & a {
    text-decoration: none;
    color: #3a7bd5;
  border: 1px solid #3a7bd5;
  border-radius: 10px;
  cursor: pointer;
  height: 30px;
  text-align: center;
  padding: 7px;
  font-size: 30px;
  }
  &:hover {
    transform: scale(1.1)
  }
`
const submitButton = css`
  font-size: 1.5rem;
  background-color: #3a7bd5;
  color: #fff;
  border: 2px solid #3a7bd5;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 20px;
  padding: 20px 100px;

  &:hover {
      animation: pulse 1s infinite;
    }

  &:focus {
    outline: none;
  }

  @keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: none;
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 .5rem 2rem rgba(0,0,0,.25);
  }

  100% {
    transform: scale(1);
    box-shadow: none;
  }
}
`

export default graphql(mutation)(EditTransaction)
