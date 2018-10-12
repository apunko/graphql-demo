import gql from 'graphql-tag';

export default gql`
  mutation updateTodo($id: Int!, $title: String!){
    updateTodo(id: $id, title: $title) {
      id
      title
    }
  }
`;
