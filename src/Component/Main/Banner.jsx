import { Link } from "react-router-dom";
import banner from "../../assets/book logo.png";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-base-200 rounded-2xl">
        <div className="hero-content p-10 flex-col lg:flex-row-reverse">
          <img src={banner} className=" rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <Link to="/listedBook" className="btn btn-primary my-8">
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
