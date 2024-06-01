const ButtonUpload = ({ title, type, className, disabled, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} flex-row gap-2.5
      bg-red-400  text-sm font-kinn mx-auto mt-6 transition-all hover:bg-grad-300 hover:opacity-80 translate-y-0 active:translate-y-1 active:scale-95
      px-6 py-3 rounded-sm shadow-sm disabled:opacity-70`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default ButtonUpload;
