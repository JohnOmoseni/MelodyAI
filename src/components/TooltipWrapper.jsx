import Tooltip from "@mui/material/Tooltip";

export default function TooltipWrapper({
  title,
  position = "bottom",
  children,
}) {
  return (
    <Tooltip
      title={title}
      placement={position}
      enterDelay={200}
      leaveDelay={200}
    >
      {children}
    </Tooltip>
  );
}
