const locationWeather: DTO.WeatherDataType = {
    "consolidated_weather": [
        {
            "id": 5879046278742016,
            "weather_state_name": "Heavy Rain",
            "weather_state_abbr": "hr",
            "wind_direction_compass": "SW",
            "created": "2021-10-09T10:42:55.581853Z",
            "applicable_date": "2021-10-09",
            "min_temp": 24.924999999999997,
            "max_temp": 29.52,
            "the_temp": 28.205,
            "wind_speed": 6.38304675249609,
            "wind_direction": 230.6689084421498,
            "air_pressure": 1011.5,
            "humidity": 81,
            "visibility": 10.115923009623797,
            "predictability": 77
        },
        {
            "id": 4542610824757248,
            "weather_state_name": "Heavy Rain",
            "weather_state_abbr": "hr",
            "wind_direction_compass": "SW",
            "created": "2021-10-09T10:42:58.343893Z",
            "applicable_date": "2021-10-10",
            "min_temp": 24.865,
            "max_temp": 29.025,
            "the_temp": 28.415,
            "wind_speed": 6.9378860203027655,
            "wind_direction": 218.35719584069514,
            "air_pressure": 1011.5,
            "humidity": 82,
            "visibility": 10.76991618945359,
            "predictability": 77
        },
        {
            "id": 6260699723464704,
            "weather_state_name": "Heavy Rain",
            "weather_state_abbr": "hr",
            "wind_direction_compass": "SW",
            "created": "2021-10-09T10:43:01.271200Z",
            "applicable_date": "2021-10-11",
            "min_temp": 24.685,
            "max_temp": 29.325000000000003,
            "the_temp": 28.155,
            "wind_speed": 5.8301473776346135,
            "wind_direction": 223.33584037688144,
            "air_pressure": 1012.0,
            "humidity": 81,
            "visibility": 10.783275670086693,
            "predictability": 77
        },
        {
            "id": 6301020876439552,
            "weather_state_name": "Light Rain",
            "weather_state_abbr": "lr",
            "wind_direction_compass": "SW",
            "created": "2021-10-09T10:43:04.142176Z",
            "applicable_date": "2021-10-12",
            "min_temp": 24.965,
            "max_temp": 30.939999999999998,
            "the_temp": 30.915,
            "wind_speed": 6.2927334882632096,
            "wind_direction": 219.34729194840114,
            "air_pressure": 1011.0,
            "humidity": 74,
            "visibility": 11.582359023303905,
            "predictability": 75
        },
        {
            "id": 6157721599475712,
            "weather_state_name": "Light Rain",
            "weather_state_abbr": "lr",
            "wind_direction_compass": "SW",
            "created": "2021-10-09T10:43:07.094175Z",
            "applicable_date": "2021-10-13",
            "min_temp": 25.455,
            "max_temp": 31.28,
            "the_temp": 30.900000000000002,
            "wind_speed": 7.319875795811129,
            "wind_direction": 218.04320196686245,
            "air_pressure": 1010.5,
            "humidity": 74,
            "visibility": 10.887044659190328,
            "predictability": 75
        },
        {
            "id": 5594771646054400,
            "weather_state_name": "Heavy Rain",
            "weather_state_abbr": "hr",
            "wind_direction_compass": "SSW",
            "created": "2021-10-09T10:43:10.166689Z",
            "applicable_date": "2021-10-14",
            "min_temp": 25.479999999999997,
            "max_temp": 30.39,
            "the_temp": 31.07,
            "wind_speed": 5.2983229937166945,
            "wind_direction": 201.5,
            "air_pressure": 1011.0,
            "humidity": 73,
            "visibility": 9.999726596675416,
            "predictability": 77
        }
    ],
    "time": "2021-10-09T13:05:35.070459+01:00",
    "sun_rise": "2021-10-09T06:33:05.113342+01:00",
    "sun_set": "2021-10-09T18:33:51.157271+01:00",
    "timezone_name": "LMT",
    "parent": {
        "title": "Nigeria",
        "location_type": "Country",
        "woeid": 23424908,
        "latt_long": "9.084570,8.674250"
    },
    "sources": [
        {
            "title": "BBC",
            "slug": "bbc",
            "url": "http://www.bbc.co.uk/weather/",
            "crawl_rate": 360
        },
        {
            "title": "Forecast.io",
            "slug": "forecast-io",
            "url": "http://forecast.io/",
            "crawl_rate": 480
        },
        {
            "title": "Met Office",
            "slug": "met-office",
            "url": "http://www.metoffice.gov.uk/",
            "crawl_rate": 180
        },
        {
            "title": "OpenWeatherMap",
            "slug": "openweathermap",
            "url": "http://openweathermap.org/",
            "crawl_rate": 360
        },
        {
            "title": "World Weather Online",
            "slug": "world-weather-online",
            "url": "http://www.worldweatheronline.com/",
            "crawl_rate": 360
        }
    ],
    "title": "Lagos",
    "location_type": "City",
    "woeid": 1398823,
    "latt_long": "6.439180,3.423480",
    "timezone": "Africa/Lagos"
}

export { locationWeather }