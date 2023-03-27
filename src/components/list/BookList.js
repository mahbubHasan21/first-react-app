import React from "react";
import Book from "../representational/Book";

const BookList = (props) => {
  return props.books.map((book, index) => {
    return (
      <Book
        bookName={book.bookName}
        writer={book.writer}
        delete={() => props.deleteBookState(index)}
        inputName={(event) => props.changeWithInputState(event, index)}
        key={index}
      />
    );
  });
};
export default BookList;
