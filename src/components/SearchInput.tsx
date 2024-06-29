import React from "react";

type SearchInputProps = {
  handle: string;
  setHandle: React.Dispatch<React.SetStateAction<string>>;
  handleSearchInput: (input: string) => void;
};

const SearchInput = (props: SearchInputProps) => {
  return (
    <input
      className="py-2 px-2 w-1/3 rounded-l-md text-base bg-bg-sec text-text-sec transition duration-300 ease-in-out"
      placeholder="CF Handle"
      value={props.handle}
      onChange={(e) => {
        props.setHandle(e.target.value);
      }}
      type="text"
    />
  );
};

export default SearchInput;
