import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import { Book } from "./Book";

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, i) => (
          <Book key={book.id} {...book} number={i} />
        ))}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
