import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

interface SuggestionsProps {
  loading: boolean;
  options: any[] | null;
  onItemPress: (value: string) => void;
  renderItem?: (item: any) => React.ReactNode;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  loading,
  options,
  onItemPress,
  renderItem,
}) => {
  const defaultRenderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => onItemPress(item.name)}>
      {renderItem ? (
        renderItem(item)
      ) : (
        <Text style={styles.item}>
          {item.name}, {item.state ? `${item.state}, ` : ''}
          {item.country}
        </Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <FlatList
            data={options}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={defaultRenderItem}
            ListEmptyComponent={
              <Text style={styles.emptyMessage}>No hay datos de búsqueda</Text>
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    zIndex: 5,
    elevation: 5,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    maxHeight: 200,
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  emptyMessage: {
    padding: 10,
    fontSize: 16,
    color: '#999',
  },
});

export default Suggestions;
