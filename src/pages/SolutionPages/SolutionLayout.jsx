import NavBar from "@components/NavBar.jsx";
import Brands from "@components/Brands";
import { Outlet } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function SolutionLayout() {
  return (
    <>
      <NavBar />

      <Loader>
        <section className="py-100">
          <Outlet />
        </section>

        <Brands />
        <Footer />
      </Loader>
    </>
  );
}
export default SolutionLayout;
