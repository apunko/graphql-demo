Types::Item = GraphQL::ObjectType.define do
  name 'Item'

  field :id, types.Int
  field :title, types.String
  field :description, types.String
  field :updated_at, Types::DateTime
  field :created_at, Types::DateTime
end
