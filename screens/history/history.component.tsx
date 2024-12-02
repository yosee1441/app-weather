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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HistoryScreen = () => {
  const insets = useSafeAreaInsets();
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
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={[styles.title, { color: colors.text }]}>
        Historial de búsquedas
      </Text>
      <View style={{ height: 20 }} />
      <Button title="Borrar historial" onPress={handleClearHistory} />
      <View style={{ height: 20 }} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
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
