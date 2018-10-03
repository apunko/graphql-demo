Types::Item = GraphQL::ObjectType.define do
  name 'Item'

  field :id, types.Int
  field :title, types.String
  field :description, types.String
  field :updatedAt, Types::DateTime, property: :updated_at
  field :createdAt, Types::DateTime, property: :created_at
end
