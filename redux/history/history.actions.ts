import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const findAll = createAsyncThunk('history/findAll', async () => {
  const history = await AsyncStorage.getItem('searchHistory');
  return history ? JSON.parse(history) : [];
});

export const save = createAsyncThunk(
  'history/save',
  async (searches: string[]) => {
    await AsyncStorage.setItem('searchHistory', JSON.stringify(searches));
    return searches;
  }
);
