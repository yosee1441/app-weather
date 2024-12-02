import { createSlice } from '@reduxjs/toolkit';

import { WeatherAPIResponse } from '@/screens/home/models';
import { findOneByCity } from '@/redux/weather/weather.actions';

export const WeatherEmptyState: {
  data: WeatherAPIResponse | null;
  loading: boolean;
  error: string | null;
} = {
  data: {
    coord: { lon: 0, lat: 0 },
    weather: [{ id: 0, main: '', description: '', icon: '' }],
    base: '',
    main: {
      temp: 0,
      feelsLike: 0,
      tempMin: 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0,
      seaLevel: 0,
      grndLevel: 0,
    },
    visibility: 0,
    wind: { speed: 0, deg: 0 },
    clouds: { all: 0 },
    dt: 0,
    sys: { type: 0, id: 0, country: '', sunrise: 0, sunset: 0 },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
  },
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: WeatherEmptyState,
  reducers: {
    resetWeather: () => WeatherEmptyState
  },
  extraReducers: (builder) => {
    builder
      .addCase(findOneByCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findOneByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(findOneByCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
