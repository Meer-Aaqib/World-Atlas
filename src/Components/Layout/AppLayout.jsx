import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollToTop } from "../UI/ScrollToTop";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-blue-200">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
