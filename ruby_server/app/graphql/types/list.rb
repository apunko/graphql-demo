Types::List = GraphQL::ObjectType.define do
  name 'List'

  field :id, types.Int
  field :title, types.String
  field :updated_at, Types::DateTime
  field :created_at, Types::DateTime
end
