import React, { ChangeEvent, FC, useEffect, useState } from "react";
import "./SearchBar.css";
import CloseIcon from "@mui/icons-material/Close";
import FadeIn from "react-fade-in";
import { getUserLocationSearch } from "../helpers/makeRequest";

interface SearchBarProps {
  className?: string;
  handleCloseSearch: () => void;
  searchInputVal: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  locationsNear?: DTO.PlacesNearType[];
  handleSearchLocation: (prop: {
    newLatlong?: string;
    newWoeid?: string | number;
  }) => void;
  handleSetLatlong: (val: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  className,
  handleCloseSearch,
  handleInputChange,
  handleSearchLocation,
  searchInputVal,
  locationsNear,
}) => {
  const [selectValue, setSelectVal] = useState<number | string>(
    locationsNear?.[0].woeid || ''
  );
  const [searchResult, setSearchResult] = useState<DTO.SearchResultType[]>([]);

  useEffect(() => {
    if (searchInputVal) {
      getUserLocationSearch(searchInputVal).then((data) => {
        setSearchResult(data);
      });
    }
  }, [searchInputVal]);

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
            setSelectVal(e.target.value);
            handleSearchLocation({ newWoeid: e.target.value });
          }}
          className="location-select-field"
          value={selectValue}
        >
          {locationsNear?.map((location) => (
            <option className="select-option" value={location.woeid}>
              {location.title}
            </option>
          ))}
        </select>

        <div>
          <ul>
            {searchResult?.map(
              (result, index) =>
                index < 6 && (
                  <li
                    onClick={() =>
                      handleSearchLocation({
                        newLatlong: `${result.lat},${result.lon}`,
                      })
                    }
                  >
                    {result.display_name}
                  </li>
                )
            )}
          </ul>
        </div>
      </FadeIn>
    </div>
  );
};

export { SearchBar };
