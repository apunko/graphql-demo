import { createStackNavigator } from 'react-navigation';
import TodosPreviewScreen from './todos-preview-screen';
import TodoScreen from './todo-screen';

const App = createStackNavigator(
  {
    Todo: { screen: TodoScreen },
    TodosPreview: { screen: TodosPreviewScreen },
  },
  {
    initialRouteName: 'TodosPreview',
  },
);

export default App;
