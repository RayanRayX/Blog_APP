import BlogList from './BlogList';
import useFetch from './useFetch.js';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:4000/blogs');

  return (
    <div className="Home">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {!isPending && !blogs?.length && (
        <div>
          <p>No blogs to preview.</p>
          <Link to="/create" className="create">
            <button>Create a New Blog</button>
          </Link>
        </div>
      )}
      
      {blogs && blogs.length > 0 && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;