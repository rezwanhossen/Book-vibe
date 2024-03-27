import { useLoaderData, useParams } from "react-router-dom";
import { FaHashtag } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
import { SaveReadBook, getStorRedBooks } from "../Utility/Utility";
import { toast } from "react-toastify";
import { SaveWishListBook } from "../Utility/getwishList";

const BookDital = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseFloat(id);
  const book = books.find((book) => book.id === idInt);

  const handelRead = (book) => {
    SaveReadBook(book);
  };
  const handelWish = (book) => {
    const reddata = getStorRedBooks();
    const exist = reddata.find((item) => item.id === book.id);

    if (exist) {
      toast.error("Alrady you read");
    } else {
      SaveWishListBook(book);
      // toast.success("Added wishlist successfilly ");
    }
  };

  return (
    <div className=" md:flex rounded-xl justify-between p-5">
      <div className="flex-1 bg-slate-50 p-5">
        <img className=" w-full h-full rounded-md" src={book.image} alt="" />
      </div>
      <div className="flex-1 p-5 space-y-3">
        <h1 className="text-3xl font-bold">{book.bookName} </h1>
        <p>By : {book.author} </p>
        <hr />
        <p>{book.category} </p>
        <hr />
        <p>
          <b>Review : </b>
          {book.review}
        </p>
        <div className=" flex gap-3 items-center">
          <b>Tags: </b>
          <p className=" flex gap-4">
            {book.tags.map((tag, inx) => (
              <p
                className="flex gap-2 items-center bg-slate-100 p-2 rounded-lg text-[#23BE0A]"
                key={inx}
              >
                <FaHashtag />
                {tag}
              </p>
            ))}
          </p>
        </div>
        <hr />
        <table className=" table">
          <tr>
            <td>Number of Pages:</td>
            <td>
              <b>{book.totalPages}</b>
            </td>
          </tr>
          <tr>
            <td>Publisher: </td>
            <td>
              <b>{book.publisher}</b>
            </td>
          </tr>
          <tr>
            <td>Year of Publishing: </td>
            <td>
              <b>{book.yearOfPublishing}</b>
            </td>
          </tr>
          <tr>
            <td>Rating : </td>
            <td>
              <b>{book.rating}</b>
            </td>
          </tr>
        </table>

        <div className="flex gap-7">
          <button onClick={() => handelRead(book)} className="btn">
            Read
          </button>
          <button onClick={() => handelWish(book)} className="btn btn-primary">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDital;
