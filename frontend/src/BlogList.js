import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="Blog-List">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}> {/* Use _id as the key */}
          <Link to={`/blogs/${blog._id}`}> {/* Use _id for linking */}
            <h2>{blog.title}</h2>
            <p>{blog.snippet}</p> {/* Display the snippet instead of author */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;