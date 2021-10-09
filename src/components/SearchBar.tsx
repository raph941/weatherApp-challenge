import React, { ChangeEvent, FC, useState } from "react";
import "./SearchBar.css";
import CloseIcon from "@mui/icons-material/Close";
import FadeIn from "react-fade-in";

interface SearchBarProps {
  className?: string;
  handleCloseSearch: () => void;
  searchInputVal: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  locationsNear: DTO.PlacesNearType[];
  handleSearchLocation: (newWoeid: string | number) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  className,
  handleCloseSearch,
  handleInputChange,
  handleSearchLocation,
  searchInputVal,
  locationsNear,
}) => {
  const [selectValue, setSelectVal] = useState<number | string>(locationsNear[0].woeid)

  return (
    <div className={`${className} search-bar-wrap`}>
      <div className="close-icon-wrap">
        <CloseIcon className="close-icon" onClick={handleCloseSearch} />
      </div>

      <FadeIn>
        <div className="search-input-wrap">
          <input
            value={searchInputVal}
            onChange={handleInputChange}
            placeholder="search location"
          />
          <button className="search-btn">Search</button>
        </div>

        <select
          onChange={(e) => {
            setSelectVal(e.target.value)
            handleSearchLocation(e.target.value)
          }}
          className="location-select-field"
          value={selectValue}
        >
          {locationsNear.map((location) => (
            <option className="select-option" value={location.woeid}>{location.title}</option>
          ))}
        </select>

        <p className="floating-locations">Barcelona</p>

        <p className="floating-locations">Long Beach</p>
      </FadeIn>
    </div>
  );
};

export { SearchBar };
