import gql from 'graphql-tag';

export default gql`
  mutation createTodo($title: String!){
    createTodo(title: $title) {
      id
      title
    }
  }
`;
