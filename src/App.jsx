import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
