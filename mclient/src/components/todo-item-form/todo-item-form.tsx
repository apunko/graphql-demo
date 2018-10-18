import React from 'react';
import { Mutation } from 'react-apollo';
import { Button, TextInput, StyleSheet } from 'react-native';
import { CREATE_TODO_ITEM } from '../../mutations';

interface TodoItemFormProps {
  listId: number;
  updateCache(cache: any, data: any): void;
}

interface TodoItemFormState {
  title: string;
}

class TodoItemForm extends React.Component<TodoItemFormProps, TodoItemFormState> {
  constructor(props: any) {
    super(props);

    this.state = { title: '' };
  }

  public render(): any {
    return (
      <Mutation
        mutation={CREATE_TODO_ITEM}
        update={this.props.updateCache}
      >
      {(createTodoItem: any) => {
        const onPress = () => {
          if (this.state.title === '') { return; }

          createTodoItem({ variables: { todoId: this.props.listId, title: this.state.title } });
          this.setState({ title: '' });
        };

        return (
          <>
            <TextInput
              style={styles.titleInput}
              maxLength={20}
              value={this.state.title}
              placeholder='Enter item title'
              onChangeText={(title: string) => this.setState({ title })}
            />
            <Button title='Add item' onPress={onPress} />
          </>
        );
      }}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  titleInput: {
    padding: 5,
  },
});

export default TodoItemForm;
