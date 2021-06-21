import React, { ReactElement } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToFavorites } from 'store/slices/locationSlice';

import './Weather.scss';

type WeatherProps = {
  weather: {
    name: string;
    temp: number;
    tempMax: number;
    tempMin: number;
    precipitation: number;
    humidity: number;
    windSpeed: number;
  }
};

const Weather = ({ weather }: WeatherProps): ReactElement => {
  const dispatch = useDispatch();

  return (
    <div className="weather-container">
      { weather.name
    && (
      <>
        <div className="weather">
          <p className="title">{weather.name}</p>
          <div className="temp-container">
            <span>
              {weather.temp}
              °C
            </span>
            <span>
              {weather.tempMin}
              °C
              {' '}
              /
              {' '}
              {weather.tempMax}
              °C
            </span>
          </div>
          <div className="specs">
            <span>
              Precipitation:
              {' '}
              {weather.precipitation * 100}
              %
            </span>
            <span>
              Humidity:
              {' '}
              {weather.humidity}
              %
            </span>
            <span>
              Precipitation:
              {' '}
              {Math.round(weather.windSpeed * 2.237)}
              mph
            </span>
          </div>
        </div>
        <Button onClick={() => dispatch(addToFavorites(weather))} className="favorite-button" variant="contained" color="primary">
          Add to Favorites
        </Button>
      </>
    )}
    </div>
  );
};
export default Weather;
