import React, { ChangeEvent, FC, useState } from "react";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import "./Sidebar.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { SearchBar } from "./SearchBar";
import moment from "moment";
import { celsiusToFarenheit } from "../helpers";

const Sidebar: FC<DTO.SidebarProps> = ({
  className,
  forcastData,
  handleSearchLocation,
  locationsNear,
  tempUnit,
  updateMyLocation,
  handleSetLatlong,
}) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchInputVal, setSearchInputVal] = useState<string>("");
  const tempValue =
    tempUnit === "C"
      ? forcastData?.consolidated_weather[0].the_temp.toFixed(1)
      : celsiusToFarenheit(
          forcastData?.consolidated_weather[0].the_temp || 0
        ).toFixed(1);

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
          handleSetLatlong={handleSetLatlong}
        />
      ) : (
        <div className="sidebar-inner-wrap">
          <div className="header-wrap">
            <button onClick={handleCloseSearch} className="button">
              Search for places
            </button>
            <div className="gps-icon-wrap" onClick={() => updateMyLocation()}>
              <GpsFixedIcon className="gps-icon" />
            </div>
          </div>

          <div className="weather-image-wrap">
            <img
              className="weather-image"
              src={`https://www.metaweather.com/static/img/weather/${forcastData?.consolidated_weather[0].weather_state_abbr}.svg`}
              alt="current weather"
            />
          </div>

          <div className="temp-value">
            <h1 className="flex-centered-wrapper">
              {tempValue}
              <span className="celcius-wrap">
                {tempUnit === "C" ? <>&#8451;</> : <>&#8457;</>}
              </span>
            </h1>
          </div>

          <p className="temp-title">
            {forcastData?.consolidated_weather[0].weather_state_name}
          </p>

          <p className="flex-centered-wrapper date-text">
            Today &bull; {moment().format("ddd, D MMM")}
          </p>

          <div className="location-text-wrap">
            <AddLocationIcon className="location-icon" />
            <p>{forcastData?.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { Sidebar };
