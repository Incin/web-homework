import gql from 'graphql-tag'

export default gql`
  {
    transactions {
    id
    user_id 
    description 
    merchant_id 
    debit 
    credit 
    amount
    }
  }  
`
