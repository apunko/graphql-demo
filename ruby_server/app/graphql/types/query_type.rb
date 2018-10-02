Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :lists,
    description: 'Return all lists',
    function: Queries::Lists.new
end
