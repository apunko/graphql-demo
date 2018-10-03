class Resolvers::CreateList < GraphQL::Function
  argument :title,
    !types.String

  type Types::List

  def call(_, args, _)
    list = ::List.new(title: args.title)

    if list.save
      list
    else
      GraphQL::ExecutionError.new("Unsuccessful save")
    end
  end
end
