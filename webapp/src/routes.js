import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import Edit from './edit/edit-page'
import { Graph } from './graph'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <Link to='/'>Enter Transaction / Home</Link>
            </li>
            <li>
              <Link to='/graph'>Graph Display</Link>
            </li>
            <li>
              <Link to='/history'>Transaction History</Link>
            </li>
          </ul>
        </nav>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Edit} exact path='/edit' />
          <Route component={Graph} exact path='/graph' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const navStyle = css`
  grid-row: 1;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      justify-content: center;
      margin-top: 40px;
  }
  
  & > ul > li {
    margin: 20px;
    
    &:hover {
      animation: pulse 1s infinite;
    }
    
    & a {
      text-decoration: none;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 40px;
      padding: 15px;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: #3a7bd5;
      }
    }
  }
  
  @keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: none;
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0,0,0,.5);
  }

  100% {
    transform: scale(1);
    box-shadow: none;
  }
}
  
`

const contentStyle = css`
  grid-row: 2;
`
