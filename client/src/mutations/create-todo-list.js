import gql from 'graphql-tag';

export default gql`
  mutation createTodoList($title: String!){
    createTodoList(title: $title) {
      id
      title
    }
  }
`;
