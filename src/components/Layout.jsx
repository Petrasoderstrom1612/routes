import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <body>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};

export default Layout;
