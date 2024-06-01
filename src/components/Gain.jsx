const gainsArray = [
  "Identify top value leads that are Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quis!",
  "Identify top value leads that are Lorem ipsum dolor sit consectetur, adipisicing elit. At, quis!",
];

const Gain = ({ gains = gainsArray }) => {
  return (
    <section className="spike relative bg-[#282828]">
      <div className="p-section !py-[5em]">
        <h2 className=" text-center text-grad capitalize md:mt-4">
          What you stand to gain
        </h2>

        <ul className="my-[3em] w-[90%] mx-auto flex-column !items-center gap-20">
          {gains?.map((text, idx) => {
            return (
              <li key={idx} className="flex-row gap-8">
                <div className="gain w-[80px] font-kinn text-black text-2xl">
                  0{idx + 1}
                </div>
                <p className="text-sm text-shadow">{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Gain;
