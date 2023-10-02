import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className="text-sm bg-white sm:mx-16 pb-8">
      <div className="form-control">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-red100">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            type="text"
            placeholder="  Type an Address, Suburb or City"
            className="input bg-white w-full pl-10"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
