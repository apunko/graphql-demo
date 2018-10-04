import gql from 'graphql-tag';

export default gql`
  mutation createTodoItem($id: Int!, $title: String!){
    createTodoItem(id: $id, title: $title) {
      id
      title
    }
  }
`;
