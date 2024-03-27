import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, name, atrImg, author, description, img } = blog;
  console.log(blog);
  return (
    <div>
      <div className=" p-4 border rounded">
        <img className=" w-full h-60" src={img} alt="" />
        <div className=" space-y-2">
          <h1 className="text-xl font-bold">{name} </h1>
          <p className=" flex items-center gap-2">
            <img className=" w-10 h-10 rounded-full" src={atrImg} />{" "}
            <b>{author} </b>
          </p>
          <hr />
          <p>{description}</p>
          <Link to={`/blog/${id}`} className=" btn btn-success text-white">
            SEE BLOG
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
