import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';

import { useDispatch } from 'react-redux';
import { fetchLocationWeather } from 'store/slices/locationSlice';
import useSelector from '../../../hooks/useSelector';

import Location from '../../partials/Location/Location';
import Weather from '../../partials/Weather/Weather';
import './Home.scss';

const Home = (): ReactElement => {
  const dispatch = useDispatch();
  const { weather } = useSelector((s) => s.location);

  const setNewLocation = (name: string) => {
    dispatch(fetchLocationWeather(name));
  };

  return (
    <Box className="home-container" display="flex" bgcolor="background.paper">
      <Location setNewLocation={setNewLocation} />
      <Weather weather={weather} />
    </Box>
  );
};

export default Home;
