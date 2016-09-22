import React from 'react';
import TodosList from './todos-list';

const todos = [
{
  text: 'task one',
  isCompleted: false
},
{
  text: 'task two',
  isCompleted: true
}
];

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      todos
    };
  }
  render() {
      return (
        <div>
          <h1>React Tasker</h1>
          <TodosList todos={this.state.todos} />
        </div>
    );
  }
}
