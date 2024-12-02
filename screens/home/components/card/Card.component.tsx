import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardProps {
  name: string;
  temperature: number;
  description: string;
  humidity: number;
  icon: string;
}

const Card: React.FC<CardProps> = ({
  name,
  temperature,
  description,
  humidity,
  icon,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cityName}>{name}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.humidity}>Humedad: {humidity}%</Text>
      <Image
        style={styles.weatherIcon}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
    elevation: 5,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 20,
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  humidity: {
    fontSize: 14,
    color: '#777',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default Card;
