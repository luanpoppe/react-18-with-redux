import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Alice Walstead",
    title: "How to Catch a Reindeer",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "Sarah J. Maas",
    title: "A Court of Thorns and Roses",
    img: "https://m.media-amazon.com/images/I/81RrEEMiOCL._SL1500_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((b) => b.id == id);
    console.log("book: ", book);
    return book;
  };
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} getBook={getBook} />
      ))}
    </section>
  );
};

const Book = ({ author, img, title, getBook, id }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
