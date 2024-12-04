import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Projects from './pages/Projects';
import SignIn from './signIn/Signin';
import SignUp from './signIn/SignUp';
import NewsArticle from './Blog/DetailBlog/NewsArticle';
import DetailProject from './pages/DetailProject';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog/detailblog" element={<NewsArticle />} />
        <Route path="/project/detailproject" element={<DetailProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
