Types::Query = GraphQL::ObjectType.define do
  name 'Query'

  field :list,
    description: 'Return list by id',
    function: Resolvers::List.new

  field :lists,
    description: 'Return all lists',
    function: Resolvers::Lists.new
end
