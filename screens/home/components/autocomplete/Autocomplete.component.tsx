import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useAutocompleteCities } from '@/screens/home/hooks';
import { Input } from '@/components';
import { Suggestions } from './components';

interface AutocompleteProps {
  placeholder: string;
  onItemPress: (value: string) => void;
  renderItem?: (item: any) => React.ReactNode;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  onItemPress,
  renderItem,
}) => {
  const { suggestions, loading, setQuery, query } = useAutocompleteCities();

  return (
    <View style={styles.container}>
      <Input
        value={query}
        placeholder={placeholder}
        onChangeText={(text) => setQuery(text)}
      />
      {query.length > 0 && (
        <Suggestions
          loading={loading}
          options={suggestions}
          onItemPress={(city: string) => {
            onItemPress(city);
            setQuery('');
          }}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

});

export default Autocomplete;
