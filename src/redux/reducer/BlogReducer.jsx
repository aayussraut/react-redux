const initialState = {
  blogList: [],
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOG_POSTS":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_BLOG_POSTS_SUCCESS":
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        blogList: action.payload,
      };
    case "FETCH_BLOG_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_BLOG_POST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_BLOG_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        blogList: [...state.blogList, action.payload],
      };
    case "ADD_BLOG_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
