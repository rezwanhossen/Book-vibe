import { useLoaderData, useParams } from "react-router-dom";
import { FaHashtag } from "react-icons/fa";
const BookDital = () => {
  const books = useLoaderData([]);
  const { id } = useParams();
  const book = books.find((book) => book.id === id);

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
          <button className="btn">Read</button>
          <button className="btn btn-primary">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDital;
