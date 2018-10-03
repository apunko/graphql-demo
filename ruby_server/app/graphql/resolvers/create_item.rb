class Resolvers::CreateItem < GraphQL::Function
  argument :listId,
    !types.Int,
    description: 'The id of the list',
    as: :list_id

  argument :title,
    !types.String

  argument :description,
    types.String

  type Types::Item

  def call(_, args, _)
    item = Item.new(
      title: args.title,
      description: args.description,
      list: ::List.find(args.list_id)
    )

    if item.save
      item
    else
      GraphQL::ExecutionError.new("Unsuccessful save")
    end
  end
end
