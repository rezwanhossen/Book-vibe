import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { getStorRedBooks } from "../Utility/Utility";
import ReadBook from "./ReadBook";
import Wishlist from "./Wishlist";
import { getStorwishListBooks } from "../Utility/getwishList";

const ListedBook = () => {
  const [tabindx, settabindx] = useState(0);

  const [reedBooks, setreadBooks] = useState([]);
  useEffect(() => {
    const storRedBook = getStorRedBooks();
    setreadBooks(storRedBook);
  }, []);
  const [wishdBooks, setwishBooks] = useState([]);
  useEffect(() => {
    const storRedBook = getStorwishListBooks();
    setwishBooks(storRedBook);
  }, []);

  const handelsortByratting = (filter) => {
    if (filter === "Rating") {
      let data = [...reedBooks];
      let datas = [...wishdBooks];
      const res = data.sort((a, b) => b.rating - a.rating);
      const rest = datas.sort((a, b) => b.rating - a.rating);
      setreadBooks(res);
      setwishBooks(rest);
    } else if (filter === "pag") {
      let data = [...reedBooks];
      let datas = [...wishdBooks];
      const res = data.sort((a, b) => b.totalPages - a.totalPages);
      const rest = datas.sort((a, b) => b.totalPages - a.totalPages);
      setreadBooks(res);
      setwishBooks(rest);
    } else if (filter === "year") {
      let data = [...reedBooks];
      let datas = [...wishdBooks];
      const res = data.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      const rest = datas.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setreadBooks(res);
      setwishBooks(rest);
    }
  };
  return (
    <div>
      <div className=" flex justify-center bg-slate-100 p-5 rounded-md my-3">
        <h1 className="text-3xl font-bold ">BOOKS</h1>
      </div>
      <div className="flex justify-center ">
        <details className="dropdown">
          <summary className="m-1 btn-success btn">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <Link onClick={() => handelsortByratting("Rating")}>Rating</Link>
            </li>
            <li>
              <Link onClick={() => handelsortByratting("pag")}>
                Number of pages
              </Link>
            </li>
            <li>
              <Link onClick={() => handelsortByratting("year")}>
                Publisher year
              </Link>
            </li>
          </ul>
        </details>
      </div>

      <div className=" my-10">
        <div className="flex border-b items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            onClick={() => settabindx(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabindx === 0 ? " border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Read Books</span>
          </Link>
          <Link
            onClick={() => settabindx(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabindx === 1 ? " border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Wishlist Books</span>
          </Link>
        </div>
      </div>
      {tabindx == 0 && <ReadBook reedBooks={reedBooks}></ReadBook>}
      {tabindx == 1 && <Wishlist wishdBooks={wishdBooks}></Wishlist>}

      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default ListedBook;
