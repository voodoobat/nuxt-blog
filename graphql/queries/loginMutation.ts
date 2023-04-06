export const loginMutation = gql`
  mutation LoginMutation(
    $identifier: String!
    $password: String!
  ) {
    login(input: {
      identifier: $identifier
      password: $password
    }) {
      jwt
    }
  }
`
