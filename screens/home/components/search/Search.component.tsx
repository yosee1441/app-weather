import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { Input } from '@/components';

interface SearchProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

const Search: React.FC<SearchProps> = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Ingresa la ciudad"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Buscar" onPress={handleSearch} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
});

export default Search;
