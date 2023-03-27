import React from "react";

const Book = (props) => {
  return (
    <div className="book">
      <h3 onClick={props.delete}>Book: {props.bookName}</h3>
      <h4>Writer: {props.writer} </h4>
      <input type="text" onChange={props.inputName} value={props.bookName} />
    </div>
  );
};

export default Book;
