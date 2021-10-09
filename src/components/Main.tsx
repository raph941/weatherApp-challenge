import React, { FC } from "react";
import "./Main.css";
import WeatherImage from "../assets/Hail.png";

interface MainProps {
  className: string;
  weatherData: DTO.WeatherDataType
}

const Main: FC<MainProps> = ({ className, weatherData }) => {
  const imageUrl = (weatherStataAbbr: string) => `https://www.metaweather.com/static/img/weather/${weatherStataAbbr}.svg`

  return (
    <>
      <div className={className}>
        <div className="temp-unit__wrapper">
          <span className="temp-unit bg-white mr-12">&deg;C</span>
          <span className="temp-unit bg-gray">&deg;F</span>
        </div>

        <div className="forcast-card__wrapper">
          {weatherData.consolidated_weather.map((dateData) => {
            return (
              <div className="forcast-card">
                <p className="forcast-card-title">Tomorrow</p>

                <div className="forcast-card-image__wrap">
                  <img
                    className="forcast-card-image"
                    src={imageUrl('')}
                    alt="weather condition"
                  />
                </div>

                <p className="forcast-card-temp">16C 11F</p>
              </div>
            )
          })}
          

          <div className="forcast-card">
            <p className="forcast-card-title">Tomorrow</p>

            <div className="forcast-card-image__wrap">
              <img
                className="forcast-card-image"
                src={WeatherImage}
                alt="weather condition"
              />
            </div>

            <p className="forcast-card-temp">16C 11F</p>
          </div>

          <div className="forcast-card">
            <p className="forcast-card-title">Tomorrow</p>

            <div className="forcast-card-image__wrap">
              <img
                className="forcast-card-image"
                src={WeatherImage}
                alt="weather condition"
              />
            </div>

            <p className="forcast-card-temp">16C 11F</p>
          </div>

          <div className="forcast-card">
            <p className="forcast-card-title">Tomorrow</p>

            <div className="forcast-card-image__wrap">
              <img
                className="forcast-card-image"
                src={WeatherImage}
                alt="weather condition"
              />
            </div>

            <p className="forcast-card-temp">16C 11F</p>
          </div>

          <div className="forcast-card">
            <p className="forcast-card-title">Tomorrow</p>

            <div className="forcast-card-image__wrap">
              <img
                className="forcast-card-image"
                src={WeatherImage}
                alt="weather condition"
              />
            </div>

            <p className="forcast-card-temp">16C 11F</p>
          </div>
        </div>

        <div className="highlights">
          <div className="highlight-title">Today's Heighlights</div>
          <div className="highlights-big-card-wrap">
            <div className="heighlight-big-card">
              <div>Wind Status</div>
              <div>7mph</div>
              <div>wsw</div>
            </div>

            <div className="heighlight-big-card">
              <div>Hidity</div>
              <div>84mph</div>
              <div>wsw</div>
            </div>
          </div>

          <div className="highlights-small-card-wrap">
            <div className="heighlight-small-card">
              <div>Visibility</div>
              <div>7mph</div>
            </div>

            <div className="heighlight-small-card">
              <div>Air Pressure</div>
              <div>84mph</div>
            </div>
          </div>
        </div>
        <div className="footer">created by Raphael - devChallenges.io</div>
      </div>
    </>
  );
};

export { Main };
