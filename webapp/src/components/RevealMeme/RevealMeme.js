import React, { Component } from 'react'
import { css } from '@emotion/core'
import meme from './meme.jpg'

class RevealMeme extends Component {
  state = {
    isHidden: true
  }
  revealGif = () => {
    this.setState({
      isHidden: false
    })
  }
  render () {
    return (
      <>
        <button css={submitButton} onClick={this.revealGif}>Click to reveal!</button>
        <img alt='meme' css={(!this.state.isHidden ? displayImage : hideImage)} src={meme} />
      </>
    )
  }
}

export default RevealMeme

const hideImage = css`
  display: none;
`

const displayImage = css`
  margin: 40px;
  width: 400px;
  height: 400px;
`

const submitButton = css`
  font-size: 1.5rem;
  background-color: #fff;
  color: #3a7bd5;
  border: 2px solid #fff;
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
