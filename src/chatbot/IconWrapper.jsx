import TooltipWrapper from "@components/TooltipWrapper";

const IconWrapper = ({ icon, className, tooltip, onClick, type, disabled }) => {
  return (
    <TooltipWrapper tooltip={tooltip} position="top">
      <button
        type={type}
        disabled={disabled}
        className={`icon p-2 text-neutral-400 rounded-md transition-colors hover:bg-neutral-800 hover:text-white active:scale-95 active:translate-y-1 hover:drop-shadow-sm bg-neutral-700 ${className}`}
        onClick={onClick}
      >
        {icon}
      </button>
    </TooltipWrapper>
  );
};

export default IconWrapper;
