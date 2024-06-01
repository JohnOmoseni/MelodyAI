import { MdOutlineArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function AuthHeader({ text, link }) {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-6 pb-4 px-6 flex-row !justify-between gap-3 shadow-lg border-b border-solid border-br-light opacity-80">
      <MdOutlineArrowBack
        className="h-5 w-5 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <p className="text-regular text-center flex-row">
        {text[0]}
        <Link
          to={link}
          className="px-1 !text-grad transition-100 hover:text-grad-200 hover:scale-95"
        >
          {text[1]}
        </Link>
      </p>
    </div>
  );
}
export default AuthHeader;
