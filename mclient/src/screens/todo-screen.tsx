import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import TodoList from '../components/todo-list';

class TodoScreen extends React.Component<NavigationScreenProps<any>> {
  static navigationOptions = ({ navigation }: NavigationScreenProps<any>) => ({
    title: navigation.state.params.title,
  });

  render() {
    const { id, title } = this.props.navigation.state.params;

    return (
      <TodoList id={id} title={title} />
    );
  }
}

export default TodoScreen;
