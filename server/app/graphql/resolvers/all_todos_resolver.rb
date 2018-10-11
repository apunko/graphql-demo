# frozen_string_literal: true

module Resolvers
  class AllTodosResolver < BaseResolver
    def resolve
      Todo.all
    end
  end
end
