import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root.jsx";
// import Main from "./Component/Main/Home.jsx";
import Home from "./Component/Main/Home.jsx";
import BookDital from "./Component/BookDital/BookDital.jsx";
import ListedBook from "./Component/ListedBook/ListedBook.jsx";
import ReadPags from "./Component/ReadPags/ReadPags.jsx";
import Error from "./Component/Erroe/Error.jsx";
import ReadBook from "./Component/ListedBook/ReadBook.jsx";
import Wishlist from "./Component/ListedBook/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booklist/:id",
        element: <BookDital></BookDital>,
        loader: () => fetch("../datas.json"),
      },
      {
        path: "/listedBook",
        element: <ListedBook></ListedBook>,
        children: [
          {
            index: true,
            element: <ReadBook></ReadBook>,
            loader: () => fetch("../datas.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/readPags",
        element: <ReadPags></ReadPags>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
