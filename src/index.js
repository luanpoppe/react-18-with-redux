import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import { Book } from "./Book";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((b) => b.id == id);
    console.log("book: ", book);
    return book;
  };
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} getBook={getBook} />
      ))}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
