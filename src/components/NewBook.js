import React, { Component } from "react";

class NewBook extends Component {
  state = {
    bookName: "",
    authorName: "",
    description: "",
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: [value],
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Book name:</label> <br />
          <input
            type="text"
            name="bookName"
            value={this.state.bookName}
            onChange={(event) => this.handleInputChange(event)}
          />
          <br />
          <label>Author name:</label>
          <br />
          <input
            type="text"
            name="authorName"
            value={this.state.authorName}
            onChange={(event) => this.handleInputChange(event)}
          />
          <br />
          <label>Description:</label>
          <br />
          <textarea
            placeholder="Book description"
            name="description"
            value={this.state.description}
            onChange={(event) => this.handleInputChange(event)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default NewBook;
