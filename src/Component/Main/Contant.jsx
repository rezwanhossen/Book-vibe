import { useEffect, useState } from "react";
import BookList from "./BookList";

const Contant = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("datas.json")
      .then((rsc) => rsc.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="my-10 text-center">
        <h1 className=" text-4xl font-bold">Books</h1>
      </div>
      <div className=" grid gap-5 md:grid-cols-3">
        {books.map((book) => (
          <BookList key={book.id} book={book}></BookList>
        ))}
      </div>
    </div>
  );
};

export default Contant;
