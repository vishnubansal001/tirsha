import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blog/:id" element={<SingleBlog />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
