import React, { FC } from "react";
import moment from "moment";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ProgressBar } from '../components/ProgressBar'
import "./Main.css";

interface MainProps {
  className: string;
  locationWeather: DTO.WeatherDataType;
}

const Main: FC<MainProps> = ({ className, locationWeather }) => {
  const imageUrl = (weatherStataAbbr: string) =>
    `https://www.metaweather.com/static/img/weather/${weatherStataAbbr}.svg`;

  return (
    <>
      <div className={className}>
        <div className="temp-unit__wrapper">
          <span className="temp-unit bg-white mr-12">&deg;C</span>
          <span className="temp-unit bg-gray">&deg;F</span>
        </div>

        <div className="forcast-card__wrapper">
          {locationWeather.consolidated_weather.map((dateData, index) => {
            if (index > 4) {
              return undefined;
            }
            let formattedDate = moment(dateData.applicable_date).format(
              "ddd, Do MMM"
            );
            if (index === 0) formattedDate = "Tomorrow";

            return (
              <div className="forcast-card">
                <p className="forcast-card-title">{formattedDate}</p>

                <div className="forcast-card-image__wrap">
                  <img
                    className="forcast-card-image"
                    src={imageUrl(dateData.weather_state_abbr)}
                    alt="weather condition"
                  />
                </div>

                <div className="forcast-card-temp">
                  <span>{dateData.min_temp.toFixed(1)}&#8451;</span>
                  <span className="max-temp">
                    {dateData.max_temp.toFixed(1)}&#8451;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="highlights">
          <div className="highlight-title">Today's Heighlights</div>
          <div className="highlights-big-card-wrap">
            <div className="heighlight-big-card">
              <div>Wind Status</div>
              <div className="heighlight-card-title">
                {locationWeather.consolidated_weather[0].wind_speed.toFixed(1)}{" "}
                <span className="heighlight-card-unit">mph</span>
              </div>
              <div className="navigation-wrap">
                <NavigationIcon className="navigation-icon" />
                wsw
              </div>
            </div>

            <div className="heighlight-big-card">
              <div>Humidity</div>
              <div className="heighlight-card-title">
                {locationWeather.consolidated_weather[0].humidity.toFixed(1)}{" "}
                <span className="heighlight-card-unit">%</span>
              </div>
              <div className="navigation-wrap">
                <ProgressBar percentage={locationWeather.consolidated_weather[0].humidity} />
              </div>
            </div>
          </div>

          <div className="highlights-small-card-wrap">
            <div className="heighlight-small-card">
              <div>Visibility</div>
              <div className="heighlight-card-title">
                {locationWeather.consolidated_weather[0].visibility.toFixed(1)}{" "}
                <span className="heighlight-card-unit">miles</span>
              </div>
            </div>

            <div className="heighlight-small-card">
              <div>Air Pressure</div>
              <div className="heighlight-card-title">
                {locationWeather.consolidated_weather[0].air_pressure.toFixed(1)}{" "}
                <span className="heighlight-card-unit">mb</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">created by Raphael - devChallenges.io</div>
      </div>
    </>
  );
};

export { Main };
