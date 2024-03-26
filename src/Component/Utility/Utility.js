// import { json } from "react-router-dom";

const getStorRedBooks = () => {
  const StorReadbook = localStorage.getItem("read-Book");
  if (StorReadbook) {
    return JSON.parse(StorReadbook);
  }
  return [];
};
const SaveReadBook = (id) => {
  const StorRedBooks = getStorRedBooks();
  const exist = StorRedBooks.find((itms) => itms === id);
  if (!exist) {
    StorRedBooks.push(id);
    localStorage.setItem("read-Book", JSON.stringify(StorRedBooks));
  } else {
    alert("jjj");
  }
};
export { SaveReadBook, getStorRedBooks };
