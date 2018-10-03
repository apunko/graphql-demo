class Resolvers::DestroyItem < GraphQL::Function
  argument :itemId,
    !types.Int,
    description: 'The id of the item to destroy',
    as: :item_id

  type Types::List

  def call(_, args, _)
    item = Item.find(args.item_id)

    if item.destroy
      ::List.find(item.list_id)
    else
      GraphQL::ExecutionError.new("Unsuccessful delete")
    end
  end
end
