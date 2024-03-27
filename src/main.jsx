import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
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
import Contact from "./Component/Contact/Contact.jsx";
import Blogs from "./Component/Contact/Blogs.jsx";
import BlogDital from "./Component/Contact/BlogDital.jsx";

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
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
            loader: () => fetch("../datas.json"),
          },
        ],
      },
      {
        path: "/readPags",
        element: <ReadPags></ReadPags>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:id",
        element: <BlogDital></BlogDital>,
        loader: () => fetch("../blogs.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
