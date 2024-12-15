import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [team, setTeam] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndTeam = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setIsLoggedIn(false);
        return;
      }

      try {
        // Fetch data user dari endpoint /api/me
        const userResponse = await fetch("http://127.0.0.1:8000/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!userResponse.ok) throw new Error("Gagal memuat data pengguna");
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch data tim dari endpoint /api/teams
        const teamResponse = await fetch("http://127.0.0.1:8000/api/teams", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!teamResponse.ok) throw new Error("Gagal memuat data tim");
        const teamData = await teamResponse.json();

        // Cari tim berdasarkan user ID
        const userTeam = teamData.find((team) => team.user_id === userData.id);
        if (userTeam) setTeam(userTeam);

        setIsLoggedIn(true);
      } catch (error) {
        console.error(error.message);
        setIsLoggedIn(false);
      }
    };

    fetchUserAndTeam();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null);
    setTeam(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <img src="../../public/img/logo.png" alt="Logo" className="h-10 mr-2" />
        </div>

        <div className="flex space-x-6">
          {!isLoggedIn ? (
            <>
              <Link to="/" className="text-gray-800 hover:text-blue-500 font-semibold">
                Home
              </Link>
              <Link to="/projects" className="text-gray-800 hover:text-blue-500 font-semibold">
                Projects
              </Link>
              <Link to="/events" className="text-gray-800 hover:text-blue-500 font-semibold">
                Events
              </Link>
              <Link to="/award" className="text-gray-800 hover:text-blue-500 font-semibold">
                Awards
              </Link>
              <Link to="/blog" className="text-gray-800 hover:text-blue-500 font-semibold">
                Blog
              </Link>
              <Link to="/forum" className="text-gray-800 hover:text-blue-500 font-semibold">
                Forum
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-blue-500 font-semibold">
                Contact
              </Link>
            </>
          ) : (
            <>
              <Link
                to= "/dashboard"
                className="text-gray-800 hover:text-blue-500 font-semibold"
              >
                Dashboard
              </Link>
              <Link to="/projects" className="text-gray-800 hover:text-blue-500 font-semibold">
                Projects
              </Link>
              <Link to="/create-project" className="text-gray-800 hover:text-blue-500 font-semibold">
                Create Project
              </Link>
              <Link to="/events" className="text-gray-800 hover:text-blue-500 font-semibold">
                Events
              </Link>
              <Link to="/award" className="text-gray-800 hover:text-blue-500 font-semibold">
                Awards
              </Link>
              <Link to="/blog" className="text-gray-800 hover:text-blue-500 font-semibold">
                Blog
              </Link>
              <Link to="/forum" className="text-gray-800 hover:text-blue-500 font-semibold">
                Forum
              </Link>
            </>
          )}
        </div>

        <div className="flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/signin" className="text-gray-800 hover:text-blue-500 font-semibold">
                <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  SignIn
                </button>
              </Link>
              <Link to="/signup" className="text-gray-800 hover:text-blue-500 font-semibold">
                <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  SignUp
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-[185px] h-[46px] hover:bg-blue-600 transition"
              >
                <img
                  src={`http://127.0.0.1:8000/storage/team_images/${team?.image || "default.jpg"}`}
                  alt="Team Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold truncate">{team?.name || "User"}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="pt-20 bg-white"></div>
    </>
  );
};

export default Navbar;
