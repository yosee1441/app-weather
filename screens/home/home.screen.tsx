import React, { useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { findOneByCity } from '@/redux/weather/weather.actions';
import { save } from '@/redux/history';
import { CITY_NAME_DEFAULT } from './utils/constants';
import { Container } from '@/components';
import { Search, Card, Autocomplete } from './components';

export default function HomeScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather.data);
  const loading = useAppSelector((state) => state.weather.loading);
  const error = useAppSelector((state) => state.weather.error);
  const history = useAppSelector((state) => state.history.searches);

  useEffect(() => {
    dispatch(findOneByCity(CITY_NAME_DEFAULT));
  }, []);

  const handleSearch = (city: string) => {
    dispatch(findOneByCity(city))
      .unwrap()
      .then(() => {
        !history.includes(city) && dispatch(save([...history, city]));
      });
  };

  const handleCardClick = () => {
    router.push('/about');
  };

  return (
    <Container>
      <Search
        onSearch={handleSearch}
        loading={loading}
        onItemPress={(city) => {
          dispatch(findOneByCity(city))
            .unwrap()
            .then(() => {
              !history.includes(city) && dispatch(save([...history, city]));
            })
            .then(() => {
              router.push('/about');
            });
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : !error && weather ? (
        <TouchableOpacity onPress={handleCardClick}>
          <Card
            name={weather.name}
            temperature={weather.main.temp}
            description={weather.weather[0].description}
            humidity={weather.main.humidity}
            icon={weather.weather[0].icon}
          />
        </TouchableOpacity>
      ) : null}
    </Container>
  );
}
