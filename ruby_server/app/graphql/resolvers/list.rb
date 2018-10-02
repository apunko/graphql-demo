class Resolvers::List < GraphQL::Function
  type Types::List

  argument :id,
    !types.Int,
    description: 'The id of the list'

  def call(_, args, _)
    List.find(args.id)
  end
end

