declare namespace DTO {
    export interface LocationDataType {
        distance: number,
        title: string,
        location_type: string,
        woeid: number,
        latt_long: string
    }

    interface ConsolidatedDataType {
        id: number,
        weather_state_name: string,
        weather_state_abbr: string,
        wind_direction_compass: string,
        created: string,
        applicable_date: string,
        min_temp: number,
        max_temp: number,
        the_temp: number,
        wind_speed: number,
        wind_direction: number,
        air_pressure: number,
        humidity: number,
        visibility: number,
        predictability: number,
    }

    interface ParentLocation {
        title: string,
        location_type: string,
        woeid: number,
        latt_long: string,
    }

    interface SourceType {
        title: string,
        slug: string,
        url: string,
        crawl_rate: number,
    }

    export interface ForcastDataType {
        consolidated_weather: ConsolidatedDataType[],
        time: string,
        sun_rise: string,
        sun_set: string,
        timezone_name: string,
        parent: ParentLocation,
        sources: SourceType[],
        title: string,
        location_type: string,
        woeid: number,
        latt_long: string,
        timezone: string,
    }

    export interface SidebarProps {
        className?: string,
        forcastData?: ForcastDataType,
        handleSearchLocation: (prop: { newLatlong?: string, newWoeid?: string | number }) => void,
        locationsNear?: PlacesNearType[],
        tempUnit: 'C' | 'F',
        updateMyLocation: () => void,
        handleSetLatlong: (val: string) => void,
    }

    export interface PlacesNearType {
        distance: number,
        title: string,
        location_type: string,
        woeid: number | number,
        latt_long: string,
    }

    export interface SearchResultType {
        class: string,
        display_name: string,
        importance: number,
        lat: string,
        licence: string,
        lon: string,
        osm_id: number,
        type: string,
        place_id: string,
        boundingbox: string[],
    }
}