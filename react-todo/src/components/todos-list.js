import React from 'react';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  renderItems() {
    let tasks = this.props.todos;

    return tasks.map((todo,index) => <TodosListItem key={index} {...todo} {...this.props}/>);
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
