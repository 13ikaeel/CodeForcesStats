import React from "react";

type SearchButtonProps = {
  handle: string;
  setHandle: React.Dispatch<React.SetStateAction<string>>;
  handleSearchInput: (input: string) => void;
};

const SearchButton = (props: SearchButtonProps) => {
  return (
    <button
      className="py-2 px-2 w-1/6 rounded-r-md text-base bg-sec mx-0 text-text-sec transition duration-300 ease-in-out hover:bg-pri"
      onClick={() => {
        props.handleSearchInput(props.handle);
      }}
    >
      Search
    </button>
  );
};

export default SearchButton;
