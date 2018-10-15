import React from 'react';
import TodoPreviewList from '../components/todo-preview-list';
import TodoScreen from './todo-screen';


class TodosPreviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Your todos',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <TodoPreviewList handleSelect={(id: number) => { navigate('Todo', { id }) }} />
    );
  }
}

export default TodosPreviewScreen;
