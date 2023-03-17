import React, { Component } from "react";
import Book from "./components/Book";
import "./style.css";

class App extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "Java", writer: "George" },
      { bookName: "Python", writer: "Orwell" },
      { bookName: "C#", writer: "well" },
    ],
  };

  deleteBookState = (index) => {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  render() {
    return this.state.books.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          writer={book.writer}
          delete={() => this.deleteBookState(index)}
          key={index}
        />
      );
    });
  }
}

export default App;
