Types::Mutation = GraphQL::ObjectType.define do
  name 'Mutation'

  field :renameList,
    description: 'Rename existing list',
    function: Resolvers::RenameList.new
end
