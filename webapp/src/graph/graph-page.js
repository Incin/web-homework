import React from 'react'

import { css } from '@emotion/core'

export function Graph () {
  return (
    <>
      <div css={pageTitle}>See graphs / charts below.</div>
      <div css={contentLayout}>
        chart
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
