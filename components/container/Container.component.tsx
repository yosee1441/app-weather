import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ContainerProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ style, children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[style, styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Container;
