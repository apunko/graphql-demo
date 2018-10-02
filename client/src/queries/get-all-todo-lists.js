import gql from 'graphql-tag';

export default gql`
  {
    allTodoLists {
      id
      title
    }
  }
`;
