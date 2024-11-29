import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Articles from "../components/blogs/Articles";
import Sidebar from "../components/blogs/SideBar";


function App() {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row"> <Sidebar /> <Articles /> </div>
        <Footer />
        {/* Konten lainnya */}
      </div>
    );
  }