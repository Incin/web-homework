import React from 'react'

import { css } from '@emotion/core'
import AddTransaction from '../components/AddTransaction/AddTransaction'
import TransactionList from '../components/TransactionList/TransactionList'

export function Home () {
  return (
    <>
      <div css={pageTitle}>Enter a transaction below.</div>
      <div css={contentLayout}>
        <AddTransaction />
        <div css={pageTitle}>Transaction History</div>
        <TransactionList />
      </div>
    </>
  )
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
