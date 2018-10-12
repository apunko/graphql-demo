import gql from 'graphql-tag';

export default gql`
  query todo($id: Int!) {
    todo(id: $id) {
      id
      title
      todoItems {
        id
        title
      }
    }
  }
`;
