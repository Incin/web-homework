import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../../queries/fetchTransactionList'
import Chart from 'react-google-charts'

class DisplayGraph extends Component {
  state = {
    // eslint-disable-next-line react/prop-types
    transactionJsonArray: this.props.data.transactions,
    merchantArray: [],
    countOne: 0,
    countTwo: 0
  }
  componentDidMount = () => {
    // eslint-disable-next-line react/prop-types
    let object = this.props.data.transactions
    let countOne = 0
    let countTwo = 0
    // eslint-disable-next-line react/prop-types
    for (let item in object) {
      // eslint-disable-next-line react/prop-types
      if (object[item].merchant_id === 'bestbuy') {
        countTwo++
      }
      // eslint-disable-next-line react/prop-types
      if (object[item].merchant_id === 'walmart') {
        countOne++
      }
    }
    this.setState({
      countOne: countOne,
      countTwo: countTwo
    })
  }
  render () {
    // eslint-disable-next-line react/prop-types
    return (
      <>
        <Chart
          chartType='PieChart'
          data={[
            ['Merchant', 'Number of Transactions'],
            ['Bestbuy', this.state.countTwo],
            ['Walmart', this.state.countOne]
          ]}
          height={'600px'}
          loader={<div>Loading Chart</div>}
          options={{
            legend: 'none',
            pieSliceText: 'label',
            pieStartAngle: 100,
            title: 'See if walmart or bestbuy has more transactions. Enter a transaction with walmart or bestbuy as the merchantId or seed the database.'
          }}
          rootProps={{ 'data-testid': '1' }}
          width={'700px'}
        />
      </>
    )
  }
}

export default graphql(query)(DisplayGraph)
