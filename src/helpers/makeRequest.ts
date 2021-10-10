export interface GetLocationWeatherProps {
    lat: number
    long: number
}

const baseURL = 'https://tranquil-brook-69806.herokuapp.com/https://www.metaweather.com/';

const getPlacesNearLocation = async (latlong: string): Promise<DTO.PlacesNearType[]> => {
    const placesNearUrl = `${baseURL}/api/location/search/?lattlong=${latlong}`
    
    const forcastData = await fetch(placesNearUrl).then((res) => res.json())
    
    return forcastData as DTO.PlacesNearType[]
}

const getLocationWeather = async (latlong?: string, woeid?: number | string): Promise<DTO.ForcastDataType> => {
    let forCastUrl
    if (!woeid) {
        const latlongUrl = `${baseURL}api/location/search/?lattlong=${latlong}`

        const data: DTO.ParentLocation[] = await fetch(latlongUrl).then((res) => res.json());
        forCastUrl = `${baseURL}api/location/${data[0].woeid}`
    } else {
        forCastUrl = `${baseURL}api/location/${woeid}`
    }

    const forcastData = await fetch(forCastUrl).then((res) => res.json())
    
    return forcastData as DTO.ForcastDataType
}

const getUserLocationSearch = async (useInput: string): Promise<DTO.SearchResultType[]> => {
    const dataUrl = `https://nominatim.openstreetmap.org/search/?city=${useInput.split(' ').join('+')}&format=json`;
    const data = await fetch(dataUrl).then((res) => res.json());

    return data as DTO.SearchResultType[]
}

export {
    getLocationWeather,
    getPlacesNearLocation,
    getUserLocationSearch,
}