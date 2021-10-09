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

    export interface WeatherDataType {
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
}