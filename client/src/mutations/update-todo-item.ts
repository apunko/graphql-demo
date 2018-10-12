import gql from 'graphql-tag';

export default gql`
  mutation updateTodoItem($id: Int!, $title: String!){
    updateTodoItem(id: $id, title: $title) {
      id
      title
    }
  }
`;
