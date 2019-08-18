import React from 'react'

import { css } from '@emotion/core'
import TransactionList from '../components/TransactionList/TransactionList'

export function History () {
  return (
    <>
      <div css={pageTitle}>Transaction History</div>
      <div css={contentLayout}>
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
