import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Search({ className }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching");
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchValue(val);
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div
      className={`${className} first-line:flex-2 px-3 py-2 mx-auto w-[95%] relative rounded-md shadow-sm border border-solid border-br-light`}
    >
      <span className="icon absolute center top-3 right-3 align-middle">
        <BiSearchAlt size={18} fill="#888" />
      </span>

      <input
        type="text"
        name="search"
        value={searchValue}
        placeholder="Search..."
        onChange={handleInputChange}
        onKeyDown={handleKey}
        className="w-full field-reset placeholder:text-base pr-7 placeholder:text-neutral-600"
      />
    </div>
  );
}
export default Search;
