import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { useAutocompleteCities } from '@/screens/home/hooks';
import { Input } from '@/components';
import { Suggestions } from './components';

interface AutocompleteProps {
  placeholder: string;
  onChangeText: (value: string) => void;
  onItemPress: (value: string) => void;
  renderItem?: (item: any) => React.ReactNode;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  onItemPress,
  renderItem,
  onChangeText,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { suggestions, loading, setQuery, query } = useAutocompleteCities();

  return (
    <View style={styles.container}>
      <Input
        value={query}
        placeholder={placeholder}
        onChangeText={(text) => {
          onChangeText(text);
          setQuery(text);
          setShowSuggestions(true);
        }}
        onSubmitEditing={() => setShowSuggestions(false)}
      />
      {showSuggestions && (
        <Suggestions
          loading={loading}
          options={suggestions}
          onItemPress={(option: string) => {
            onItemPress(option);
            setShowSuggestions(false);
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
