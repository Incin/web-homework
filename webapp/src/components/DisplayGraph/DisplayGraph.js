import React, { Component } from 'react'
import { graphql } from 'react-apollo'
// import { css } from '@emotion/core'
import query from '../../queries/fetchTransactionList'
import Chart from 'react-google-charts'

class DisplayGraph extends Component {
  state = {
    // eslint-disable-next-line react/prop-types
    transactionJsonArray: this.props.data.transactions,
    merchantArray: []
  }
  // combineDataToState = (item, item2) => {
  //   this.setState({
  //     merchantArray: item
  //   })
  //   console.log('heya' + this.state.merchantArray)
  // }
  renderData = () => {
    // let tempMerchantArray = []
    // // eslint-disable-next-line react/prop-types
    // if (this.state.transactionJsonArray != null) {
    //   console.log(this.state.transactionJsonArray.forEach(e => {
    //     tempMerchantArray.push(e.merchant_id)
    //   }))
    // }
    // this.combineDataToState(tempMerchantArray)
  }
  render () {
    return (
      <>
        <Chart
          chartType='PieChart'
          data={[
            ['Merchant', 'Number of Transactions'],
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
