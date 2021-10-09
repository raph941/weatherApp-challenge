import React, { ChangeEvent, FC, useState } from "react";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import "./Sidebar.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { SearchBar } from "./SearchBar";
import moment from "moment";

const Sidebar: FC<DTO.SidebarProps> = ({ className, locationWeather, handleSearchLocation, locationsNear }) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchInputVal, setSearchInputVal] = useState<string>("");

  const handleCloseSearch = () => {
    setShowSearch((current) => !current);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputVal(e.target.value);
  };

  return (
    <div className={`${className} sidebar-wrapper`}>
      {showSearch ? (
        <SearchBar
          handleCloseSearch={handleCloseSearch}
          handleInputChange={handleInputChange}
          searchInputVal={searchInputVal}
          handleSearchLocation={handleSearchLocation}
          locationsNear={locationsNear}
        />
      ) : (
        <div className="sidebar-inner-wrap">
          <div className="header-wrap">
            <button onClick={handleCloseSearch} className="button">
              Search for places
            </button>
            <div className="gps-icon-wrap">
              <GpsFixedIcon className="gps-icon" />
            </div>
          </div>

          <div className="weather-image-wrap">
            <img
              className="weather-image"
              src={`https://www.metaweather.com/static/img/weather/${locationWeather.consolidated_weather[0].weather_state_abbr}.svg`}
              alt="current weather"
            />
          </div>

          <div className="temp-value">
            <h1 className="flex-centered-wrapper">
              {locationWeather.consolidated_weather[0].the_temp.toFixed(1)}
              <span className="celcius-wrap">&#8451;</span>
            </h1>
          </div>

          <p className="temp-title">
            {locationWeather.consolidated_weather[0].weather_state_name}
          </p>

          <p className="flex-centered-wrapper date-text">
            Today &bull; {moment().format("ddd, D MMM")}
          </p>

          <div className="location-text-wrap">
            <AddLocationIcon className="location-icon" />
            <p>{locationWeather.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { Sidebar };
