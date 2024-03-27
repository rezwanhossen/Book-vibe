import { useLoaderData, useParams } from "react-router-dom";

const BlogDital = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const idint = parseFloat(id);
  const blog = blogs.find((blog) => blog.id === idint);

  return (
    <div>
      <div className=" p-6 border rounded-md space-y-2">
        <div className="flex items-center gap-2">
          <img src={blog.atrImg} alt="" />
          <div>
            <h3 className="text-xl font-bold">{blog.author} </h3>
            <p>{blog.date} </p>
          </div>
        </div>
        <img src={blog.img} className="w-full h-[60vh]" alt="" />
        <h1 className="text-3xl font-blod">{blog.name} </h1>
        <p>
          category : <b> {blog.category}</b>
        </p>
        <hr />
        <p>
          <b>Description :</b> {blog.description}{" "}
        </p>
        <p>
          <b>Blog : </b>
          {blog.blog}
        </p>
      </div>
    </div>
  );
};

export default BlogDital;
