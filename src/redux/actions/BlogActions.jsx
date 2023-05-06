const fetchBlogPosts = () => {
  return {
    type: "FETCH_BLOG_POSTS",
  };
};

const fetchBlogPostsSuccess = (blogPosts) => {
  return {
    type: "FETCH_BLOG_POSTS_SUCCESS",
    payload: blogPosts,
  };
};

const fetchBlogPostsFailure = (error) => {
  return {
    type: "FETCH_BLOG_POSTS_FAILURE",
    payload: error,
  };
};
const addBlog = () => {
  return {
    type: "ADD_BLOG_POST",
  };
};
const addBlogPostSuccess = (blogPost) => {
  return {
    type: "ADD_BLOG_POST_SUCCESS",
    payload: blogPost,
  };
};
const addBlogPostFailure = (error) => {
  return {
    type: "ADD_BLOG_POST_FAILURE",
    payload: error,
  };
};

const fetchBlogPostsAsync = () => {
  return (dispatch) => {
    dispatch(fetchBlogPosts());
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        dispatch(fetchBlogPostsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchBlogPostsFailure(error.message));
      });
  };
};

const addBlogPostAsync = (blogPost) => {
  return (dispatch) => {
    dispatch(addBlog());
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogPost),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addBlogPostSuccess(data));
      })
      .catch((error) => {
        dispatch(addBlogPostFailure(error.message));
      });
  };
};

export {
  fetchBlogPosts,
  fetchBlogPostsSuccess,
  fetchBlogPostsFailure,
  fetchBlogPostsAsync,
  addBlogPostAsync,
};
