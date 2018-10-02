import gql from 'graphql-tag';

export default gql`
  query todoList($id: number!) {
    todoList(id: $id) {
      title
      items {
        title
      }
    }
  }
`;
