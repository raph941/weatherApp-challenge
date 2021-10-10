import React, { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";
import { getUserLocation } from "../helpers";
import {
  getLocationWeather,
  getPlacesNearLocation,
} from "../helpers/makeRequest";
import "./Layout.css";

const Layout = () => {
  const [forcastData, setForcastData] = useState<DTO.ForcastDataType>();
  const [locationsNear, setLocationsNear] = useState<DTO.PlacesNearType[]>();
  const [tempUnit, setTempUnit] = useState<"C" | "F">("C");
  const [latlong, setLatlong] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchLocation = (prop: {
    newLatlong?: string;
    newWoeid?: string | number;
  }) => {
    const { newLatlong, newWoeid } = prop;
    setLoading(true);
    getLocationWeather(newLatlong, newWoeid)
      .then((data) => {
        if (!data.hasOwnProperty("detail")) {
          setForcastData(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  const handleUnitChange = (val: "C" | "F") => setTempUnit(val);
  const handleSetLatlong = (val: string) => setLatlong(val);
  const updateMyLocation = () => {
    setLoading(true);
    getUserLocation(handleSetLatlong);
    if (latlong) {
      getLocationWeather(latlong)
        .then((data) => {
          data && setForcastData(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    updateMyLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latlong]);

  useEffect(() => {
    if (forcastData) {
      getPlacesNearLocation(forcastData.latt_long).then((data) => {
        if (data) {
          setLocationsNear(data);
        }
      });
    }  
  }, [forcastData])

  return (
    <Loader loading={loading}>
      <div className="layout-container">
        <Sidebar
          className="sidebar"
          handleSetLatlong={handleSetLatlong}
          forcastData={forcastData}
          handleSearchLocation={handleSearchLocation}
          updateMyLocation={updateMyLocation}
          locationsNear={locationsNear}
          tempUnit={tempUnit}
        />
        <Main
          className="main"
          handleUnitChange={handleUnitChange}
          forcastData={forcastData}
          tempUnit={tempUnit}
        />
      </div>
    </Loader>
  );
};

export { Layout };
