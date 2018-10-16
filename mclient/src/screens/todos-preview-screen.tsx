import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import TodoPreviewList from '../components/todo-preview-list';

class TodosPreviewScreen extends React.Component<NavigationScreenProps<any>> {
  private static navigationOptions = {
    title: 'Your todos',
  };

  public render(): React.ReactNode {
    const { navigate } = this.props.navigation;
    const navigateToTodo = (id: number, title: string) => { navigate('Todo', { id, title }); };

    return (
      <TodoPreviewList handleSelect={navigateToTodo} />
    );
  }
}

export default TodosPreviewScreen;
