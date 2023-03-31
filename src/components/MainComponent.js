import React, { Component } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Book from "./representational/Book";

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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <nav>
                  <ul>
                    <li>
                      <NavLink to="/" exact="true">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/add-book">Add book</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                  </ul>
                </nav>
                <Outlet />
              </>
            }
          >
            <Route
              index
              element={
                <>
                  <h2>Book list</h2>

                  <button onClick={this.toggleBooks}>
                    {this.state.showBooks ? "Hide books" : "Show books"}
                  </button>

                  {books}
                </>
              }
            />
            <Route path="/add-book" element={<h2>Add new book</h2>} />
            <Route path="/about" element={<h2>About</h2>} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default MainComponent;
