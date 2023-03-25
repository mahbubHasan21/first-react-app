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
    showBooks: true,
  };

  deleteBookState = (index) => {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index],
    };
    book.bookName = event.target.value;

    const books = [...this.state.books];
    books[index] = book;
    this.setState({
      books: books,
    });
  };

  toggleBooks = () => {
    this.setState({
      showBooks: !this.state.showBooks,
    });
  };

  render() {
    let books = null;
    if (this.state.showBooks) {
      books = this.state.books.map((book, index) => {
        return (
          <Book
            bookName={book.bookName}
            writer={book.writer}
            delete={() => this.deleteBookState(index)}
            inputName={(event) => this.changeWithInputState(event, index)}
            key={index}
          />
        );
      });
    }

    return (
      <div className="app">
        <h2>Book list</h2>
        <button onClick={this.toggleBooks}>Toggle book</button>
        {books}
      </div>
    );
  }
}

export default App;
