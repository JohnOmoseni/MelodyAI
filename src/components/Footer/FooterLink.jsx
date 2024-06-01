import { Link } from "react-router-dom";

function FooterLink({ link, href }) {
  return (
    <li className="mb-2">
      <Link to={href} className="hover:text-purple-600">
        {link}
      </Link>
    </li>
  );
}
export default FooterLink;
