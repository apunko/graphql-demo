import { GET_TODO_LIST } from '../queries';

const ApolloCacheService = {
  onItemDestroy: (variables: any, cache: any, { data: { destroyedTodoItem } }: any) => {
    const { todo } = cache.readQuery({ query: GET_TODO_LIST, variables });
    cache.writeQuery({
      query: GET_TODO_LIST,
      data: { todo: { ...todo,
        todoItems: todo.todoItems.filter((item: any) => item.id !== destroyedTodoItem.id) } },
    });
  },

  onItemAdd: (variables: any, cache: any, { data: { createTodoItem } }: any) => {
    const { todo } = cache.readQuery({ query: GET_TODO_LIST, variables });
    cache.writeQuery({
      query: GET_TODO_LIST,
      data: { todo: { ...todo, todoItems: todo.todoItems.concat([createTodoItem]) } },
    });
  },
};

export default ApolloCacheService;
