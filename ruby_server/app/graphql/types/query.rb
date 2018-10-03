Types::Query = GraphQL::ObjectType.define do
  name 'Query'

  field :todoList,
    description: 'Return list by id',
    function: Resolvers::List.new

  field :todoLists,
    description: 'Return all lists',
    function: Resolvers::Lists.new
end
