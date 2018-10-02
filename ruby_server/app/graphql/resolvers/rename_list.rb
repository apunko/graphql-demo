class Resolvers::RenameList < GraphQL::Function
  argument :listId,
    !types.Int,
    description: 'The id of the list to rename',
    as: :list_id

  argument :title,
    !types.String,
    description: 'New title'

  type Types::List

  def call(_, args, _)
    list = List.find(args.list_id)
    list.title = args.title

    if list.save
      list
    else
      raise StandardError.new('Unsuccessful save')
    end
  end
end
