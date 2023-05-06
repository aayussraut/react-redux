import { useLocation } from "react-router-dom";

const Blog = ({ blog }) => {
  const { state } = useLocation();
  const blogg = state ?? blog;
  return (
    <>
      <div key={blogg.id}>
        <h1>{blogg.title}</h1>
        <p>{blogg.body}</p>
      </div>
    </>
  );
};

export default Blog;
