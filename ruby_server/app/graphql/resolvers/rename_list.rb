class Resolvers::RenameList < GraphQL::Function
  argument :id,
    !types.Int,
    description: 'The id of the list to rename'

  argument :title,
    !types.String,
    description: 'New title'

  type Types::List

  def call(_, args, _)
    list = List.find(args.id)
    list.title = args.title

    if list.save
      list
    else
      GraphQL::ExecutionError.new("Unsuccessful update")
    end
  end
end
