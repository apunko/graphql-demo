Types::List = GraphQL::ObjectType.define do
  name 'List'

  field :id, types.Int
  field :title, types.String
  field :updatedAt, Types::DateTime, property: :updated_at
  field :createdAt, Types::DateTime, property: :created_at
  field :todoItems, types[Types::Item], property: :items
end
