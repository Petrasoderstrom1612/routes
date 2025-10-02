import { Outlet } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <HeaderLinks />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
