import React from 'react'

import { css } from '@emotion/core'
import RevealMeme from '../components/RevealMeme/RevealMeme'

export function Funny () {
  return (
    <>
      <div css={pageTitle}>I love memes so I couldnt pass this up...</div>
      <div css={contentLayout}>
        <RevealMeme />
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
