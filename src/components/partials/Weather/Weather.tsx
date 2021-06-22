import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToFavorites } from 'store/slices/locationSlice';
import { toast } from 'react-toastify';
import useSelector from '../../../hooks/useSelector';

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
  const [temp, setTemp] = useState<'neutral' | 'warm' | 'cold'>('neutral');
  const { favorites } = useSelector((s) => s.location);

  const updateFavorites = () => {
    if (favorites.find((currentWeather) => currentWeather.name === weather.name)) {
      toast.warning(`${weather.name} is already in favorites`);
    } else {
      toast.success(`${weather.name} added to favorites`);
      dispatch(addToFavorites(weather));
    }
  };

  useEffect(() => {
    if (weather.name) {
      if (weather.temp < 15) {
        setTemp('cold');
      }
      if (weather.temp > 23) {
        setTemp('warm');
      }
    }
  }, [weather]);

  return (
    <div className={`weather-container ${temp}`}>
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
        <Button onClick={updateFavorites} className="favorite-button" variant="contained" color="primary">
          Add to Favorites
        </Button>
      </>
    )}
    </div>
  );
};
export default Weather;
