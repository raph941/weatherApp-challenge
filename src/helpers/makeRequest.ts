
export interface GetLocationWeatherProps {
    lat: number
    long: number
}

const baseUrl = 'https://www.metaweather.com'

const getLocationWeather = async (prop: GetLocationWeatherProps) => {
    const { lat = 9.896527, long=8.858331 } = prop

    const requestOptions: RequestInit = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
                'Content-Type': 'application/json',
            },
        redirect: 'follow'
    };
      
    fetch("https://www.metaweather.com/api/location/44418/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // const data: DTO.LocationDataType = await fetch(`${baseUrl}/api/location/search/?lattlong=${lat},${long}`, {
    //     method: 'GET', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     mode: "no-cors"
    // }).then(response => response.json())
        

    // console.log('GET LOCATION DATA: ', data)
    // return data
}

export {
    getLocationWeather,

}