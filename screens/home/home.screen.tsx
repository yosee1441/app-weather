import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { findOneByCity } from '@/redux/weather/weather.actions';
import { save } from '@/redux/history';
import { Search, Card } from './components';
import { CITY_NAME_DEFAULT } from './utils/constants';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
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
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Search onSearch={handleSearch} loading={loading} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
