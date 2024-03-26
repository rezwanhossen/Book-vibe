import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorRedBooks } from "../Utility/Utility";
import { FaHashtag } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const ReadBook = () => {
  const books = useLoaderData();
  const [reedBooks, setreadBooks] = useState([]);
  useEffect(() => {
    const storRedBook = getStorRedBooks();
    if (books.length > 0) {
      const readBook = books.filter((book) => storRedBook.includes(book.id));
      setreadBooks(readBook);
    }
  }, [books]);

  return (
    <div>
      {reedBooks.map((bookRead) => (
        <div
          key={bookRead.id}
          className=" border shadow-md rounded-xl my-3 p-3"
        >
          <div className="grid md:grid-cols-4 gap-2 ">
            <div>
              <img
                className="md:w-60 h-64 rounded"
                src={bookRead.image}
                alt=""
              />
            </div>
            <div className=" col-span-3 space-y-3">
              <h1 className="text-2xl font-bold">{bookRead.bookName} </h1>
              <p>BY : {bookRead.author} </p>
              <div className=" md:flex gap-3 items-center">
                <p className=" flex gap-4 items-center">
                  <b>Tags: </b>
                  {bookRead.tags.map((tag, inx) => (
                    <p
                      className="flex gap-2 items-center bg-slate-100 p-2 rounded-lg text-[#23BE0A]"
                      key={inx}
                    >
                      <FaHashtag />
                      {tag}
                    </p>
                  ))}
                </p>
                <p className=" flex items-center space-x-2">
                  <CiLocationOn /> Year of Publishing :
                  <b> {bookRead.yearOfPublishing}</b>
                </p>
              </div>
              <div className=" md:flex gap-5">
                <p className=" flex items-center space-x-1">
                  <MdPeopleAlt /> Publisher : {bookRead.publisher}
                </p>
                <p className=" flex items-center space-x-1">
                  <RiPagesLine /> page : {bookRead.totalPages}
                </p>
              </div>
              <hr />
              <div className=" md:flex gap-3">
                <div className=" flex gap-3">
                  <p className=" py-2 px-4 bg-lime-100 rounded-full text-lime-400">
                    Category: {bookRead.category}
                  </p>
                  <p className=" py-2 px-5 rounded-full bg-red-100 text-red-400">
                    Rating: {bookRead.rating}
                  </p>
                </div>
                <button className=" py-2 px-5 rounded-full text-white bg-success">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBook;
