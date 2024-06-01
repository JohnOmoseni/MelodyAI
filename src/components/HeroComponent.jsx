function HeroComponent({ children }) {
  return (
    <div className="p-hero min-h-[80vh] flex-column md:grid md:grid-cols-hero gap-16 md:gap-[6rem] md:items-center ">
      {children}
    </div>
  );
}
export default HeroComponent;
