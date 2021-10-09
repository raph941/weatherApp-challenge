import React, { ChangeEvent, FC, useState } from "react";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import "./Sidebar.css";
import HeavyRain from "../assets/HeavyRain.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { SearchBar } from "./SearchBar";

interface SidebarProps {
  className?: string;
  locationData: DTO.LocationDataType[];  
}

const Sidebar: FC<SidebarProps> = ({ className, locationData }) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchInputVal, setSearchInputVal] = useState<string>("");
  const {  } = locationData

  const handleCloseSearch = () => {
    setShowSearch((current) => !current);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputVal(e.target.value);
  }

  return (
    <div className={`${className} sidebar-wrapper`}>
      {showSearch ? (
        <SearchBar
          handleCloseSearch={handleCloseSearch}
          handleInputChange={handleInputChange}
          searchInputVal={searchInputVal}
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
              src={HeavyRain}
              alt="current weather"
            />
          </div>

          <div className="temp-value">
            <h1 className="flex-centered-wrapper">15 C</h1>
          </div>

          <p className="temp-title">Shower</p>

          <p className="flex-centered-wrapper date-text">
            Today &bull; Fri, 5 June{" "}
          </p>

          <div className="location-text-wrap">
            <AddLocationIcon className="location-icon" />
            <p>Helsinki</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { Sidebar };
