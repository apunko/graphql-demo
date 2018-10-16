import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import TodoPreviewList from '../components/todo-preview-list';

class TodosPreviewScreen extends React.Component<NavigationScreenProps<any>> {
  static navigationOptions = {
    title: 'Your todos',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <TodoPreviewList handleSelect={(id: number, title: string) => { navigate('Todo', { id }) }} />
    );
  }
}

export default TodosPreviewScreen;
