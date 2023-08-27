import { Route, Routes } from "react-router-dom";
import Blogpage from "./pages/Blogpage";
import Homepage from "./pages/Homepage";
import useFetch from "./hooks/useFetch";

function App() {
  let { loading, error, data } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/blog/:id" element={<Blogpage />} />
      </Routes>
    </>
  );
}

export default App;
