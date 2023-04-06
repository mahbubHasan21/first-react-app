import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NewBook from "./NewBook";
import Book from "./representational/Book";
import Navigation from "./representational/Navigation";

class MainComponent extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "Java", writer: "George" },
      { bookName: "Python", writer: "Orwell" },
      { bookName: "C#", writer: "well" },
    ],
    showBooks: false,
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
    const books = this.state.books.map((book, index) => {
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

    return (
      <div className="app">
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Book list</h2>
                {books}
              </div>
            }
          />
          <Route path="/add-book" element={<NewBook />} />
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
      </div>
    );
  }
}

export default MainComponent;
