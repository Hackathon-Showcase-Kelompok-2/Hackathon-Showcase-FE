import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import SignIn from "./signIn/Signin";
import SignUp from "./signIn/SignUp";
import DetailBlog from "./pages/DetailBlog";
import DetailProject from "./pages/DetailProject";
import ContactUs from "./pages/ContactUs";
import DetailEvent from "./pages/DetailEvent";
import EventRegistration from "./pages/EventRegristration";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CreateProject from "./pages/CreateProject";
import Forum from "./pages/Forum";
import Award from "./pages/Award";
import EditProfile from "./pages/EditProfile";
import Thread from "./pages/Thread";
import Profile from "./pages/Profile";
import CreateThread from "./thread/Creat Thread/CreateThread";
import MyProject from "./pages/MyProject";
import UpdateProject from "./pages/UpdateProject";
import ProfileTeam from "./pages/ProfileTeam";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<DetailProject />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/award" element={<Award />} />
          <Route
            path="/myproject/:id"
            element={
              <ProtectedRoute>
                <MyProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-project/:id"
            element={
              <ProtectedRoute>
                <UpdateProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editprofile/:id"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-thread"
            element={
              <ProtectedRoute>
                <CreateThread />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/thread/:id" element={<Thread />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-project"
            element={
              <ProtectedRoute>
                <CreateProject />
              </ProtectedRoute>
            }
          />
          <Route path="/events/:id/regris" element={<EventRegistration />} />
          <Route path="/blog/:id" element={<DetailBlog />} />
          <Route path="/events/:id" element={<DetailEvent />} />
          <Route path="/profile-team/:id" element={<ProfileTeam />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
