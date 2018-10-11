# frozen_string_literal: true

module Resolvers
  class TodoResolver < BaseResolver
    def resolve(args)
      Todo.find_by(args)
    end
  end
end
