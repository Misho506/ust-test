/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'store';

type Weather = {
  name: string;
  temp: number;
  tempMax: number;
  tempMin: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
};

interface LocationInterface {
  weather: Weather;
  favorites: Weather[];
  loading: boolean;
}

const initialState: LocationInterface = {
  weather: {
    name: '',
    temp: 0,
    tempMax: 0,
    tempMin: 0,
    precipitation: 0,
    humidity: 0,
    windSpeed: 0,
  },
  favorites: [],
  loading: false,
};

export const counterSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLocationWeather(state, action: PayloadAction<Weather>) {
      state.weather = action.payload;
    },
    setLocationName(state, action: PayloadAction<string>) {
      state.weather = { ...state.weather, name: action.payload };
    },
    resetLocationWeather(state, action: PayloadAction<Weather>) {
      state.weather = action.payload;
    },
    addToFavorites(state, action: PayloadAction<Weather>) {
      const updatedList: Weather[] = [...state.favorites];
      if (!updatedList.find((weather) => weather.name === action.payload.name)) {
        if (updatedList.length === 3) {
          // eslint-disable-next-line no-plusplus
          for (let index = 0; index === 3; index++) {
            updatedList.push(index + 1 < updatedList.length ? updatedList[index + 1] : action.payload);
          }
        } else {
          updatedList.push(action.payload);
        }
      }
      state.favorites = updatedList;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const {
  setLocationWeather, setLocationName, resetLocationWeather, addToFavorites, setLoading,
} = counterSlice.actions;
export default counterSlice.reducer;

// ------ async function --------
const key = '0695f7b2dd5115ae627d1f9ad8b4cec8'; // key for the API

export const fetchLocationWeather = (location: string): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  // using https://openweathermap.org/current API
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=1&appid=${key}`)
    .then((resp) => resp.json()) // Convert data to json
    .then((data) => {
      const info = data.list[0];
      dispatch(setLocationWeather({
        name: location,
        temp: info.main.temp,
        tempMax: info.main.temp_max,
        tempMin: info.main.temp_min,
        precipitation: info.pop,
        humidity: info.main.humidity,
        windSpeed: info.wind.speed,
      }));
      dispatch(setLoading(false));
    })
    .catch((e) => console.log(e));
};
