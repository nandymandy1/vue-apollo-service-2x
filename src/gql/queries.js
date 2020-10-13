import gql from 'graphql-tag';

export const AUTHENTICATED_USER = gql `
query AUTH_USER{
  authUserProfile{
    id
      username
      avatarImage
      email
      lastName
      firstName
  }
}
`;

export const AUTHENTICATE_USER = gql `
query AUTHENTICATE_USER(
    $username: String!
    $password: String!
){
  authenticateUser(
      username: $username
      password: $password
){
    user{
      id
      username
      avatarImage
      email
      lastName
      firstName
    }
    token
  }
}
`;

export const GET_PAGINATED_POSTS = gql `
query GET_PAGINATED_POSTS(
  $page: Int! 
  $limit: Int!
) {
  getPostsByLimitAndPage(limit: $limit, page: $page) {
    posts {
      id
      title
      author {
        username
        firstName
        lastName
      }
    }
    paginator {
      slNo
      prev
      next
      perPage
      postCount
      currentPage
      hasPrevPage
      hasNextPage
    }
  }
}
`;

export const GET_POST_BY_PAGE_LIMIT = `
query GET_PAGINATED_POSTS(
    $page: Int!, 
    $limit: Int!
) {
    getPostsByLimitAndPage(limit: $limit, page: $page) {
        posts {
            id
            title
            featuredImage
            author {
              username
              lastName
              firstName
            }
        }
        paginator {
            perPage
            postCount
        }
    }
}`