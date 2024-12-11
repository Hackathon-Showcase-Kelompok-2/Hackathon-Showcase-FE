import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // File Navbar
import Footer from "./Footer"; // File Footer

const Layout = ({ children }) => {
  const location = useLocation();

  // Halaman yang tidak memerlukan Navbar atau Footer
  const hiddenPaths = ["/signin", "/signup"];

  const shouldHideNavAndFooter = hiddenPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavAndFooter && <Navbar />}
      <main>{children}</main>
      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
};

export default Layout;
