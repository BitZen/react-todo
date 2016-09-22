import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import _ from 'lodash';

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
          <CreateTodo createTask={this.createTask.bind(this)} />
          <TodosList todos={this.state.todos}
                     deleteTask={this.deleteTask.bind(this)}
                     saveTask={this.saveTask.bind(this)}
                     toggleTask={this.toggleTask.bind(this)}
          />
        </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      text: task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos});
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.text === oldTask);
    foundTodo.text = newTask;
    this.setState({todos: this.state.todos});
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.text === taskToDelete);
    this.setState({todos: this.state.todos});
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.text === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos: this.state.todos})
  }

}
