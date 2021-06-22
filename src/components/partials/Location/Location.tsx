import React, { ReactElement, useState } from 'react';
import {
  Select, MenuItem, Button, InputLabel, FormControl, Box, FormHelperText,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import useSelector from '../../../hooks/useSelector';

import cities from '../../../constants/cities';

import './Location.scss';

type LocationProps = {
  setNewLocation(name: string): void;
};

const Location = ({ setNewLocation }: LocationProps): ReactElement => {
  const [name, setName] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const { favorites } = useSelector((s) => s.location);

  const clearLocation = () => {
    setName('');
    toast.info('Clear location information');
  };

  const findLocation = () => {
    if (name) {
      toast.success('Location updated successfully');
      setNewLocation(name);
      setHasErrors(false);
    } else {
      toast.error('First Select a location');
      setHasErrors(true);
    }
  };

  return (
    <div className="location-container">
      <div className="select-container">
        <FormControl className="select-location" error={hasErrors}>
          <InputLabel htmlFor="locatio">Choose a Location</InputLabel>
          <Select
            inputProps={{
              name: 'location',
              id: 'location',
            }}
            value={name}
            onChange={(e) => {
              setHasErrors(false);
              setName(e.target.value as string);
            }}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                <em>{city}</em>
              </MenuItem>
            ))}
          </Select>
          {hasErrors
          && <FormHelperText>First Select a location</FormHelperText>}
        </FormControl>
        <Button className="find-button" variant="contained" color="primary" onClick={findLocation}>
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
      <Button className="clear-button" variant="contained" color="primary" onClick={clearLocation}>
        Clear
      </Button>
    </div>
  );
};
export default Location;
