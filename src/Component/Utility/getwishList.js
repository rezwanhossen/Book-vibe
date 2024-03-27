import { toast } from "react-toastify";

const getStorwishListBooks = () => {
  const StorWishbook = localStorage.getItem("Wish-Book");

  if (StorWishbook) {
    return JSON.parse(StorWishbook);
  }
  return [];
};
const SaveWishListBook = (book) => {
  const StorWishBooks = getStorwishListBooks();
  const exist = StorWishBooks.find((itms) => itms.id === book.id);
  if (exist) {
    return toast.error("Alrady added in local Storag");
  } else {
    StorWishBooks.push(book);
    localStorage.setItem("Wish-Book", JSON.stringify(StorWishBooks));
    toast.success("Added wishlist successfilly ");
  }
};
export { getStorwishListBooks, SaveWishListBook };
