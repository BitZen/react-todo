import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }
  renderTasksSection() {
    const {text, isCompleted} = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
    };


    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={text} ref="editInput" />
          </form>
        </td>
      );
    }
    return (
      <td onClick={this.props.toggleTask.bind(this, text)} style={taskStyle}>{this.props.text}</td>
    );
  }
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
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


  onEditClick() {
      this.setState({ isEditing: true});
    }
  onCancelClick() {
      this.setState({ isEditing: false});
    }
  onSaveClick(event) {
      event.preventDefault();
      const oldTask = this.props.text;
      const newTask = this.refs.editInput.value;
      this.props.saveTask(oldTask, newTask);
      this.setState({isEditing: false});
    }
}
