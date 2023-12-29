import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blog" element={<SingleBlog />} />
    </Routes>
  );
}

export default App;
