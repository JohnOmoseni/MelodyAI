import { Link } from "react-router-dom";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import FooterLink from "./FooterLink";
import { footerLinks } from "../../constants/FooterLinks";

const Logo = "/images/melody.ai.png";

const SocialMedia = ({ href, icon: Icon, title }) => {
  return (
    <a
      href={href}
      className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
    >
      <Icon className="social" size={40} />
      <span className="sr-only">{title}</span>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="p-4 mt-8 min-h-full sm:p-6">
      <div className="flex flex-col md:grid-cols-footer items-start gap-6 sm:gap-12 p-6">
        <div className="w-full mb-6 md:mb-0">
          <Link
            to="/"
            className="flex w-full justify-center md:justify-start items-center"
          >
            <span className="sr-only">Melody AI</span>
            <img src={Logo} alt="Melody AI logo" className="w-[180px] pb-8" />
          </Link>
          <div className="flex mt-4 justify-around space-x-6 sm:justify-center md:justify-start sm:mt-0">
            <SocialMedia
              href="/"
              icon={AiFillTwitterCircle}
              title="Twitter page"
            />
            <SocialMedia href="/" icon={MdFacebook} title="Facebook page" />
            <SocialMedia
              href="/"
              icon={AiFillInstagram}
              title="Instagram page"
            />
            <SocialMedia href="/" icon={BsLinkedin} title="LinkedIn page" />
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3 sm:justify-items-center">
          {footerLinks.map((item) => {
            return (
              <div key={item.id}>
                <h2 className="mb-3 text-sm font-bold text-white uppercase dark:text-white">
                  {item.name}
                </h2>
                <ul className="text-gray-300 dark:text-gray-400">
                  {item.dropdown?.map((item, idx) => (
                    <FooterLink key={idx} {...item} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="my-4 full border-gray-200 sm:mx-auto" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm w-full  text-gray-500 text-center">
          © 2023{" "}
          <a href="/" className="hover:text-purple-600">
            Octave Incorporations™.
          </a>{" "}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
