// import { json } from "react-router-dom";

import { toast } from "react-toastify";

const getStorRedBooks = () => {
  const StorReadbook = localStorage.getItem("read-Book");
  if (StorReadbook) {
    return JSON.parse(StorReadbook);
  }
  return [];
};
const SaveReadBook = (book) => {
  const StorRedBooks = getStorRedBooks();
  const exist = StorRedBooks.find((itms) => itms.id === book.id);
  if (exist) {
    return toast.error("Alrady Added to the local storage");
  } else {
    StorRedBooks.push(book);
    localStorage.setItem("read-Book", JSON.stringify(StorRedBooks));
    toast.success("Added to the local storage successfilly !");
  }
};
export { SaveReadBook, getStorRedBooks };
