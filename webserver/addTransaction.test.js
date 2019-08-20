// it('should register a new user', done => {
//   self
//     .test(
//       JSON.stringify({
//         query: `mutation AddTransaction($user_id: String, $description: String, $merchant_id: String, $debit: Boolean, $credit: Boolean, $amount: Float) {
//     addTransaction(
//       user_id: $user_id,
//       description: $description,
//       merchant_id: $merchant_id,
//       debit: $debit,
//       credit: $credit,
//       amount: $amount
//     ) {
//       amount
//     }
//   }`,
//         variables: {
//           user_id: 'employee1',
//           description: 'test',
//           merchant_id: 'testmerchant',
//           debit: true,
//           credit: false,
//           amount: 600
//         }
//       })
//     )
//     .then(res => {
//       self.tempID = res.data.register.id // adding userid to the test suite object
//       expect(res.status).toBe(200)
//       expect(res.success).toBe(true)
//       done()
//     })
//     .catch(err => {
//       expect(err).toBe(null)
//       done()
//     })
// })
//
//
