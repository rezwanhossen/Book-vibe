import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBook = () => {
  const [tabindx, settabindx] = useState(0);
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>

      <div className=" my-10">
        <div className="flex border-b items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=""
            onClick={() => settabindx(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabindx === 0 ? " border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishlist`}
            onClick={() => settabindx(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabindx === 1 ? " border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Wishlist Books</span>
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBook;
