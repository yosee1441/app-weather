import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

import { findOneByCity } from '@/redux/weather/weather.actions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { resetHistory } from '@/redux/history/history.slice';
import { findAll } from '@/redux/history';
import { useTheme } from '@react-navigation/native';
import { Container } from '@/components';

const HistoryScreen = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searches = useAppSelector((state) => state.history.searches);
  const loading = useAppSelector((state) => state.history.loading);

  const handleClearHistory = () => {
    dispatch(resetHistory());
  };

  const handleSearch = (city: string) => {
    dispatch(findOneByCity(city))
      .unwrap()
      .then(() => {
        router.push('/about');
      });
  };

  const defaultRenderItem = ({ item }: Record<'item', string>) => (
    <TouchableOpacity onPress={() => handleSearch(item)}>
      <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    dispatch(findAll());
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={[styles.title, { color: colors.text }]}>
          Cargando historial...
        </Text>
      </View>
    );
  }

  return (
    <Container>
      <Text style={[styles.title, { color: colors.text }]}>
        Historial de búsquedas
      </Text>
      <View style={{ height: 20 }} />
      <Button title="Borrar historial" onPress={handleClearHistory} />
      <View style={{ height: 20 }} />
      <View
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 4,
          elevation: 5,
        }}
      >
        <FlatList
          data={searches}
          renderItem={defaultRenderItem}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>
              No hay historial de búsqueda
            </Text>
          }
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    padding: 10,
    fontSize: 16,
    color: '#999',
  },
});

export default HistoryScreen;
