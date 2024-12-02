import { createAsyncThunk } from '@reduxjs/toolkit';

import { WeatherHttpService } from '@/screens/home/services';

export const findOneByCity = createAsyncThunk(
  'weather/findOneByCity',
  async (city: string) => {
    const service = new WeatherHttpService();
    return await service.findOneByCity(city);
  }
);