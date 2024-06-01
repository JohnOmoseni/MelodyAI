import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "@assets/logo.ico";
import ImagePlaceholder from "@components/ImagePlaceholder";

function Sidebar() {
  const { showSidebar, screenSize } = useSelector(
    (state) => state.chatbotState
  );
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const fullName = `${user?.firstname} ${
    user?.lastname ? user?.lastname : user?.firstname.slice(1)
  }`;

  const handleCloseLeftPane = ({ tag }) => {
    if (showSidebar && screenSize <= 640) {
      dispatch(setShowDrawer(false));
    }
    dispatch(setActivePane(tag));
  };

  return (
    <>
      <div className="w-full grid md:place-items-center">
        <Link
          to="/chatbot"
          className="w-[70px] my-4"
          onClick={handleCloseLeftPane}
        >
          <img src={logo} alt="ChatBot" />
        </Link>
      </div>

      <div className="absolute w-full left-0 bottom-0 px-[3%] py-4 shadow-100 bg-inherit border-t border-solid border-neutral-900">
        <ImagePlaceholder showBorder fullName={fullName} />
      </div>
    </>
  );
}
export default Sidebar;
