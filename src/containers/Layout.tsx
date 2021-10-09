import React, { FC, useState } from "react";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";
import { locationWeather as LocationData, PlacesData } from "../helpers/demoData";
import "./Layout.css";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const [locationWeather] = useState<DTO.WeatherDataType>(LocationData);
  const [locationsNear] = useState<DTO.PlacesNearType[]>(PlacesData)

  const handleSearchLocation = (newWoeid: string | number) => {

  }


  return (
    <div className="layout-container">
      <Sidebar
        className="sidebar"
        locationWeather={locationWeather}
        handleSearchLocation={handleSearchLocation}
        locationsNear={locationsNear}
      />
      <Main className="main" locationWeather={locationWeather} />
    </div>
  );
};

export { Layout };
