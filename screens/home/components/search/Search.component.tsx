import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { Autocomplete } from '@/screens/home/components';

interface SearchProps {
  onSearch: (value: string) => void;
  loading: boolean;
  onItemPress: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, loading, onItemPress }) => {
  const [city, setCity] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.autocomplete}>
        <Autocomplete
          onChangeText={(value) => setCity(value)}
          placeholder={'Buscar ciudad...'}
          onItemPress={onItemPress}
        />
      </View>
      <View style={{ height: 10 }} />
      <Button
        title="Buscar"
        onPress={() => city && onSearch(city.trim())}
        disabled={loading}
      />
      <View style={{ height: 10 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    zIndex: 10,
  },
  autocomplete: {
    position: 'relative',
    zIndex: 10,
  },
});

export default Search;
