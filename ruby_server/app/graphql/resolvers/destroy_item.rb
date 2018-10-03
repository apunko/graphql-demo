class Resolvers::DestroyItem < GraphQL::Function
  argument :id,
    !types.Int,
    description: 'The id of the item to destroy'

  type Types::List

  def call(_, args, _)
    item = Item.find(args.id)

    if item.destroy
      ::List.find(item.list_id)
    else
      GraphQL::ExecutionError.new("Unsuccessful delete")
    end
  end
end
