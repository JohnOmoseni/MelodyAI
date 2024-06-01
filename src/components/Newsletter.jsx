import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden py-[2em] px-2 md:py-[5%] min-h-[30vh] md:min-h-[25vh] bg-[#282828] ">
      <span className="text-sm text-cemter uppercase text-grad text-center w-full">
        Get in touch
      </span>

      <h2 className="text-center uppercase py-1.5 px-3">
        Need to speak to a business specialist?
      </h2>
      <form
        action="#"
        className="relative isolate grid-cols-200 mt-12 md:mt-16 gap-2 bg-grad-200 overflow-hidden rounded-md w-[80%] md:w-[50%] mx-auto"
      >
        <div className="absolute inset-[1px] -z-10 rounded-[6px] bg-[#333]"></div>

        <div className="flex-1 w-full py-5 px-3 gap-3 rounded-md px-1 sm:px-3 flex-row">
          <span className="icon inline-block leading-none">
            <MdOutlineEmail size={20} color="#666" />
          </span>
          <input
            type="text"
            placeholder="Enter email"
            className="field-reset w-full pr-2 text-sm truncate placeholder-neutral-400"
          />
        </div>
        <button
          type=""
          className="text-shadow bg-grad-200
          tracking-tight font-kinn w-max px-4 py-3 md:py-4 rounded-sm max-sm:leading-4"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};
export default Newsletter;
