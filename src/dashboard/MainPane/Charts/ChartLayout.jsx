function ChartLayout({ children }) {
  return (
    <div className="p-4 relative border border-solid bg-[#282828] border-br-dashboard rounded-md shadow-100">
      {children}
      <div className="w-full -z-10 mask-gradient absolute top-[60%] left-0 right-0 bottom-0"></div>
    </div>
  );
}
export default ChartLayout;
