import NavBar from "@components/NavBar.jsx";
import Brands from "@components/Brands";
import { Outlet } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Newsletter from "./Newsletter";
import Loader from "./Loader/Loader";

function MainLayout() {
  return (
    <>
      <NavBar />
      <Loader>
        <Outlet />

        <Brands />
        <Newsletter />
        <Footer />
      </Loader>
    </>
  );
}
export default MainLayout;
