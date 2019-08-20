import React, { Component } from 'react'

import { css } from '@emotion/core'
import ModifyTransaction from '../components/ModifyTransaction/ModifyTransaction'

class Edit extends Component {
  state = {
    // eslint-disable-next-line react/prop-types
    id: this.props.location.state.id,
    // eslint-disable-next-line react/prop-types
    userId: this.props.location.state.userId,
    // eslint-disable-next-line react/prop-types
    description: this.props.location.state.description,
    // eslint-disable-next-line react/prop-types
    merchantId: this.props.location.state.merchantId,
    // eslint-disable-next-line react/prop-types
    creditOrDebit: this.props.location.state.creditOrDebit,
    // eslint-disable-next-line react/prop-types
    credit: this.props.location.state.credit,
    // eslint-disable-next-line react/prop-types
    debit: this.props.location.state.debit,
    // eslint-disable-next-line react/prop-types
    amount: this.props.location.state.amount
  }
  render () {
    return (
      <>
        <div css={pageTitle}>Editing transaction # {this.state.id} below.</div>
        <div css={contentLayout}>
          <ModifyTransaction
            amount={this.state.amount}
            credit={this.state.credit}
            creditOrDebit={this.state.creditOrDebit}
            debit={this.state.debit}
            description={this.state.description}
            id={this.state.id}
            merchantId={this.state.merchantId}
            userId={this.state.userId}
          />
        </div>
      </>
    )
  }
}

const contentLayout = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const pageTitle = css`
  text-align: center;
  color: #fff;
  font-size: 3rem;
`

export default Edit
