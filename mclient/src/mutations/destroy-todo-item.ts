import gql from 'graphql-tag';

export default gql`
  mutation destroyTodoItem($id: Int!){
    destroyedTodoItem: destroyTodoItem(id: $id) {
      id
    }
  }
`;
