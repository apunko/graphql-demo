class Resolvers::DestroyList < GraphQL::Function
  argument :listId,
    !types.Int,
    description: 'The id of the list to destroy',
    as: :list_id

  type types[Types::List]

  def call(_, args, _)
    list = ::List.find(args.list_id)

    if list.destroy
      ::List.all
    else
      GraphQL::ExecutionError.new("Unsuccessful delete")
    end
  end
end
