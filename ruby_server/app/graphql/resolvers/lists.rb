class Resolvers::Lists < GraphQL::Function
  type types[Types::List]

  def call(_, _, _)
    ::List.all
  end
end
