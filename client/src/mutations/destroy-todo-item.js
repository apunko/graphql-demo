import gql from 'graphql-tag';

export default gql`
  mutation destroyTodoItem($id: Int!){
    destroyTodoItem(id: $id) {
      id
      todoItems {
        id
        title
      }
    }
  }
`;
