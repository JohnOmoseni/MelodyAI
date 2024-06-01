import { MdKeyboardArrowDown } from "react-icons/md";

const Select = () => {
  return (
    <div className="flex-row gap-2 py-1.5 px-2 text-sm border-2 border-solid border-br-light rounded-sm hover:drop-shadow-sm">
      <select name="year" id="year" onInput={(e) => {}}>
        <option value="Year" hidden>
          Year
        </option>
        <option value="title">Title</option>
      </select>
      <span className="pointer-events-none icon">
        <MdKeyboardArrowDown />
      </span>
    </div>
  );
};
export default Select;
