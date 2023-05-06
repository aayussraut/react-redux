import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store/store.jsx";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blogs from "./Compoent/Blogs.jsx";
import Blog from "./Compoent/Blog.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
