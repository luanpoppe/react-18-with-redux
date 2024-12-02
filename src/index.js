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
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input style={{ margin: "1rem 0" }} type="text" name="example" />
      </form>
      <button>Click Here</button>
    </section>
  );
};

const Book = ({ author, img, title }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
