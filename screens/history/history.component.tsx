import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { resetHistory } from '@/redux/history/history.slice';
import { findAll } from '@/redux/history';
import { useTheme } from '@react-navigation/native';

const HistoryScreen = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const searches = useAppSelector((state) => state.history.searches);
  const loading = useAppSelector((state) => state.history.loading);

  const handleClearHistory = () => {
    dispatch(resetHistory());
  };

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
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        Historial de búsquedas
      </Text>
      <FlatList
        data={searches}
        renderItem={({ item }) => (
          <Text style={[styles.item, { color: colors.text }]}>{item}</Text>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={
          <Text style={[styles.item, { color: colors.text }]}>
            No hay historial de búsqueda
          </Text>
        }
      />
      <Button title="Borrar historial" onPress={handleClearHistory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HistoryScreen;
