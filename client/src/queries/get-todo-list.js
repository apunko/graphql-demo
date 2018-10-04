import gql from 'graphql-tag';

export default gql`
  query todoList($id: Int!) {
    todoList(id: $id) {
      id
      title
      todoItems {
        id
        title
      }
    }
  }
`;
