import gql from 'graphql-tag';

export default gql`
  mutation createTodoItem($todoId: Int!, $title: String!){
    createTodoItem(todoId: $todoId, title: $title) {
      id
      title
    }
  }
`;
