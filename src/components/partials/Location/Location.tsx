import React, { ReactElement, useState } from 'react';
import {
  Select, MenuItem, Button, InputLabel, FormControl, Box,
} from '@material-ui/core';
import useSelector from '../../../hooks/useSelector';

import cities from '../../../constants/cities';

import './Location.scss';

type LocationProps = {
  setNewLocation(name: string): void;
};

const Location = ({ setNewLocation }: LocationProps): ReactElement => {
  const [name, setName] = useState('');
  const { favorites } = useSelector((s) => s.location);

  return (
    <div className="location-container">
      <div className="select-container">
        <FormControl className="select-location">
          <InputLabel htmlFor="location">Choose a Location</InputLabel>
          <Select
            inputProps={{
              name: 'location',
              id: 'location',
            }}
            value={name}
            onChange={(e) => setName(e.target.value as string)}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                <em>{city}</em>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button className="find-button" variant="contained" color="primary" onClick={() => name && setNewLocation(name)}>
          Find
        </Button>
        {favorites.length > 0 && (
        <Box display="flex">
          <span>
            Favorites list:
            <ul>
              {favorites.map((favorite) => (
                <li>{favorite.name}</li>
              ))}
            </ul>
          </span>
        </Box>
        )}
      </div>
      <Button className="clear-button" variant="contained" color="primary" onClick={() => setName('')}>
        Clear
      </Button>
    </div>
  );
};
export default Location;
