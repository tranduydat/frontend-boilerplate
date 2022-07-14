import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(`${this.state.username} - ${this.state.comment}`);
    event.preventDefault();
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleCommentChange(event) {
    this.setState({
      comment: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
