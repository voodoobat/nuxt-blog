export const profileQuery = gql`
  query ProfileQuery {
    profiles {
      data {
        attributes {
          displayName
        }
      }
    }
  }
`
