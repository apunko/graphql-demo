class Resolvers::UpdateItem < GraphQL::Function
  argument :itemId,
    !types.Int,
    description: 'The id of the item to update',
    as: :item_id

  argument :title,
    types.String,
    description: 'New title'

  argument :description,
    types.String,
    description: 'New description'

  type Types::Item

  def call(_, args, _)
    item = Item.find(args.item_id)

    item.title = args.title if args.title
    item.description = args.description if args.description

    if item.save
      item
    else
      GraphQL::ExecutionError.new("Unsuccessful update")
    end
  end
end
