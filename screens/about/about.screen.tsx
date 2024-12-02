import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, StyleSheet, Image, View } from 'react-native';
import { useAppSelector } from '@/redux/hooks';

import { Container } from './components';
import { GoBack } from '@/components';

const AboutScreen = () => {
  const { colors } = useTheme();
  const weather = useAppSelector((state) => state.weather.data);

  if (!weather?.id) {
    return (
      <Container>
        <Text style={{ color: colors.text }}>
          No hay datos meteorológicos disponibles
        </Text>
        <View style={{ height: 20 }} />
        <GoBack path="./">
          <Text style={{ color: colors.text }}>Volver</Text>
        </GoBack>
      </Container>
    );
  }

  return (
    <Container>
      <Text style={[styles.cityName, { color: colors.text }]}>
        {weather.name}
      </Text>
      <Image
        style={styles.icon}
        source={{
          uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
        }}
      />
      <Text style={{ color: colors.text }}>
        Temperatura: {weather.main.temp} °C
      </Text>
      <Text style={{ color: colors.text }}>
        Sensación térmica: {weather.main.feels_like} °C
      </Text>
      <Text style={{ color: colors.text }}>
        Humedad: {weather.main.humidity}%
      </Text>
      <Text style={{ color: colors.text }}>
        Velocidad del viento: {weather.wind.speed} m/s
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default AboutScreen;
