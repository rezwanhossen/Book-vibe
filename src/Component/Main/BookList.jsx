import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const BookList = ({ book }) => {
  const { bookName, image, author, category, tags, rating, id } = book;
  return (
    <Link to={`/booklist/${id}`}>
      <div className="card transition md:hover:scale-105 border-red-300 hover:border-green-400 border p-3 hover:shadow-2xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className=" flex gap-3">
            {tags.map((tag, ids) => (
              <div
                className=" p-1 rounded-md text-[#23BE0A] bg-slate-100"
                key={ids}
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author} </p>
          <hr />
          <div className=" flex justify-between">
            <p>{category} </p>
            <div className=" flex gap-2 items-center">
              {rating} <CiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookList;
