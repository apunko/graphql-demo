import gql from 'graphql-tag';

export default gql`
  {
    allTodos {
      id
      title
    }
  }
`;
