import LinkedIn from "@assets/LinkedIn.png";
import Gmail from "@assets/Gmail.png";
import Twitter from "@assets/Twitter.png";
import { aboutDetails } from "../constants/About";
import { Link } from "react-router-dom";

const Paragraph = ({ className, body }) => (
  <p className={`  my-3 mx-auto ${className} text-neutral-300`}>
    {body
      ? body
      : "Melody AI is your strategic partner in business evolution. Experience tailored insights and data-driven decisions without the tech jargon. Uncover growth opportunities, retain valuable customers, and stay ahead of market trends effortlessly. Elevate your business with Melody AI, simplifying the complex and ensuring your journey to success is smooth and impactful."}
  </p>
);

const Card = ({ className, src, name, role, desc, socials }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-16">
      <div
        className={`group w-[200px] aspect-square sm:w-[250px] rounded-[50%] my-5 self-center sm:self-start shadow-100 overflow-hidden ${className}`}
      >
        <img
          src={src}
          alt=""
          className="group-hover:scale-110 transition-all group-hover:drop-shadow-md"
        />
      </div>
      <div className="">
        <h3 className="uppercase text-2xl text-shadow max-sm:text-center">
          {name}
        </h3>
        <span className="w-full text-[#999] text-sm tracking-wide max-sm:text-center">
          {role}
        </span>
        <Paragraph
          className="max-w-[75ch] my-[2em] leading-relaxed text-base"
          body={desc}
        />
        <div className="flex gap-16 sm:gap-10 mt-12 max-sm:justify-center">
          <Link to={socials?.linkedin} className="w-[40px] h-[40px]">
            <img src={LinkedIn} alt="Linkedin" />
          </Link>
          <Link to={socials?.mail} className="w-[40px] h-[40px]">
            <img src={Gmail} alt="Gmail" />
          </Link>
          <Link to={socials?.twitter} className="w-[40px] h-[40px]">
            <img src={Twitter} alt="Twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="pt-[5em] md:pt-[6%] pb-8 px-[6%]">
      <h2 className="text-grad-200 text-center uppercase mb-8">About us</h2>
      <Paragraph className="md:max-w-[120ch] leading-relaxed text-shadow text-center text-[0.95rem]" />

      <div className="py-[3em] md:pb-[8%] md:pt-[15%]">
        <h2 className="text-grad-200 text-center uppercase">Teams</h2>
        <div className="flex flex-col gap-20 md:gap-28 my-8">
          {aboutDetails?.map((socials, idx) => (
            <Card
              key={idx}
              {...socials}
              className={idx % 2 ? "sm:order-2" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
