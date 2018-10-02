Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :renameList,
    function: Mutations::RenameList.new
end
