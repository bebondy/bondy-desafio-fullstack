import gql from 'graphql-tag';

export default gql`
  type Mutation {
    mutationTest(test: Boolean): Boolean
  }
`;