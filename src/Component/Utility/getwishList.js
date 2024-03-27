const getStorwishListBooks = () => {
  const StorWishbook = localStorage.getItem("Wish-Book");

  if (StorWishbook) {
    return JSON.parse(StorWishbook);
  }
  return [];
};
const SaveWishListBook = (book) => {
  const StorWishBooks = getStorwishListBooks();

  StorWishBooks.push(book);
  localStorage.setItem("Wish-Book", JSON.stringify(StorWishBooks));
};
export { getStorwishListBooks, SaveWishListBook };
