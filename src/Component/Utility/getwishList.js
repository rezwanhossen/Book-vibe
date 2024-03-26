const getStorwishListBooks = () => {
  const StorWishbook = localStorage.getItem("Wish-Book");
  if (StorWishbook) {
    return JSON.parse(StorWishbook);
  }
  return [];
};
const SaveWishListBook = (id) => {
  const StorWishBooks = getStorwishListBooks();
  const exist = StorWishBooks.find((itms) => itms === id);
  if (!exist) {
    StorWishBooks.push(id);
    localStorage.setItem("Wish-Book", JSON.stringify(StorWishBooks));
  }
};
export { getStorwishListBooks, SaveWishListBook };
