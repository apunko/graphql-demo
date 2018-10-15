import React from 'react';
import { Text } from 'react-native';

class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'Todo',
  };

  render() {
    const { id } = this.props.navigation.state.params;

    return (
      <Text>Todo screen {id}</Text>
    );
  }
}

export default TodoScreen;
