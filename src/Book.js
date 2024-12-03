export const Book = ({ author, img, title, getBook, id }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};
