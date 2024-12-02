import { useRouter, RelativePathString } from 'expo-router';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface GoBackProps {
  children: React.ReactNode;
  path?: RelativePathString | undefined;
}

const GoBack: React.FC<GoBackProps> = ({ children, path }) => {
  const router = useRouter();

  const handleClick = () => {
    path ? router.push(path) : router.back();
  };

  return (
    <TouchableOpacity onPress={handleClick} style={styles.backButton}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
});

export default GoBack;
