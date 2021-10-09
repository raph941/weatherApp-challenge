import React, { FC, useEffect, useState } from 'react';
import { Main } from '../components/Main';
import { Sidebar } from '../components/Sidebar';
import { locationWeather } from '../helpers/demoData';
import { getLocationWeather, GetLocationWeatherProps } from '../helpers/makeRequest';
import './Layout.css'

const defaultLocationData = [{"title":"Lagos","location_type":"City","woeid":1398823,"latt_long":"6.439180,3.423480"}];


interface LayoutProps {

}

const Layout: FC<LayoutProps> = () => {
    const [locationData, setLocationData] = useState<any>(defaultLocationData)
    const [userLocation, setUserLocation] = useState({
        lat: 9.896527,
        long: 8.858331
    })

    // useEffect(() => {
    //     const data = getLocationWeather(userLocation)
    //     if (data) {
    //         setLocationData(data)
    //     }
    // }, [userLocation])

    return (
        <div className="layout-container">
            <Sidebar className="sidebar" locationData={locationData}/>
            <Main className="main" weatherData={locationWeather} />
        </div>
    )
}

export { Layout }