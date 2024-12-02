import Toast from 'react-native-root-toast';

export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

export const showToast = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};
