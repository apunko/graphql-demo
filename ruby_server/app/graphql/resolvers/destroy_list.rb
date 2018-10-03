class Resolvers::DestroyList < GraphQL::Function
  argument :id,
    !types.Int,
    description: 'The id of the list to destroy'

  type types[Types::List]

  def call(_, args, _)
    list = ::List.find(args.id)

    if list.destroy
      ::List.all
    else
      GraphQL::ExecutionError.new("Unsuccessful delete")
    end
  end
end
