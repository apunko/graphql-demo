class TodoSchema < GraphQL::Schema
  mutation Types::Mutation
  query Types::Query
end
