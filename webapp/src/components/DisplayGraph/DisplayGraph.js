import React, { Component } from 'react'
import { graphql } from 'react-apollo'
// import { css } from '@emotion/core'
import query from '../../queries/fetchTransactionList'
import Chart from 'react-google-charts'

class DisplayGraph extends Component {
  state = {
    // eslint-disable-next-line react/prop-types
    transactionJsonArray: this.props.data.transactions
  }
  renderData = () => {
    // eslint-disable-next-line react/prop-types
    console.log(this.state.transactionJsonArray)
  }
  render () {
    return (
      <>
        <Chart
          chartType='PieChart'
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
          ]}
          height={'600px'}
          loader={<div>Loading Chart</div>}
          options={{
            title: 'Merchants with most transactions'
          }}
          rootProps={{ 'data-testid': '1' }}
          width={'700px'}
        />
        {this.renderData()}
      </>
    )
  }
}

export default graphql(query)(DisplayGraph)
