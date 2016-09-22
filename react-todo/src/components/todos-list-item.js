import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

  }
  renderTasksSection() {
    const {text, isCompleted} = this.props;
    return (
      <td>{this.props.text}</td>
    );
  }

  renderActionsSection() {
    return (
      <td>
        <button>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.text)}>Delete</button>
      </td>
    );
  }

  render() {
      return (
        <tr>
          {this.renderTasksSection()}
          {this.renderActionsSection()}
        </tr>
    );
  }
}
