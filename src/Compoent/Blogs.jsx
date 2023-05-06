import { useEffect } from "react";
import {
  fetchBlogPostsAsync,
  addBlogPostAsync,
} from "../redux/actions/BlogActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Blog from "./Blog";

const Blogs = (props) => {
  useEffect(() => {
    props.fetchBlogPostsAsync();
  }, []);

  const addBlog = () => {
    props.addBlogPostAsync({
      id: props.blogPosts.length + 1,
      title: "Blog 4",
      body: "This is blog 4",
    });
  };
  return (
    <>
      <div>
        <button onClick={addBlog}>Add Blog</button>
      </div>
      {props.isLoading && <h1>Loading...</h1>}
      {console.log(props.blogPosts)}
      {props.blogPosts.map((blog) => (
        <Link to={`/blog/${blog.id}`} state={blog}>
          <Blog key={blog.id} blog={blog} />
        </Link>
      ))}
    </>
  );
};

const mapStateToProp = (state) => {
  // console.log(state);
  return {
    isLoading: state.blog.Loading,
    blogPosts: state.blog.blogList,
    error: state.blog.error,
  };
};

export default connect(mapStateToProp, {
  fetchBlogPostsAsync,
  addBlogPostAsync,
})(Blogs);
