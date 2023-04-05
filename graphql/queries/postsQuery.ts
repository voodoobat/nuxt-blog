export const postsQuery = gql`
  query PostsQuery {
    posts {
      data {
        id
        attributes {
          title
          content
          updatedAt
        }
      }
    }
  }
`
