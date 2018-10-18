import gql from 'graphql-tag';

export default gql`
  query todo($id: Int!) {
    todo(id: $id) {
      todoItems {
        id
        title
      }
    }
  }
`;
