import gql from 'graphql-tag';

export const REGISTER_USER = gql `
mutation REGISTER_USER(
  $username: String!
  $password: String!
  $firstName: String!
  $email: String!
  $lastName: String!
){
  registerUser(newUser:{
    username: $username
    password: $password
    firstName:$firstName
    lastName: $lastName
    email: $email
  }){
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