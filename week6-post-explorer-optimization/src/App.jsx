import { useEffect, useState } from "react";
import { fetchPosts } from "./services/api";
import Error from './components/Error';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PostCard from './components/PostCard';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
       try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      setError("Failed to fetch posts. Please try again.");
    } finally {
      setLoading(false);
    }
    };

    loadPosts();
  }, []);


  if (loading) {
  return <Loader />;
  }

  if (error) {
  return <Error message={error} />;
  }


  const filteredPosts = posts.filter((post)=>
  post.title.toLowerCase().includes(search.toLowerCase()) ||
  post.body.toLowerCase().includes(search.toLowerCase())

  );

  return (
    <div>
      <Navbar />

      <SearchBar
      search={search}
      setSearch={setSearch}
      />

      <div className="posts-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.slice(0,10).map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <h2>No posts found.</h2>
        )}
        <p className="post-count">
        Showing {Math.min(filteredPosts.length, 10)} of {posts.length} Posts
        </p>
      </div>
    </div>
  );
}

export default App;
