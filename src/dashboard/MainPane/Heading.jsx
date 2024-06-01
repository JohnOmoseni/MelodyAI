const Heading = ({ title, className }) => {
  return (
    <p
      className={`${className} text-neutral-200 text-base text-shadow tracking-wide font-semibold font-kinn leading-5`}
    >
      {title}
    </p>
  );
};
export default Heading;
