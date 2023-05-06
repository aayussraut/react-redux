import { useState } from "react";
import Counter from "./Compoent/Counter";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Counter />
      <button onClick={() => navigate("/blogs")}>Blog</button>
    </>
  );
}

export default App;
