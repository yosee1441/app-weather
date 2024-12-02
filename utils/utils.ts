import { ToastAndroid, Platform } from 'react-native';

export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

export const showToastError = (message: string) => {
  Platform.OS === 'android' && ToastAndroid.show(message, ToastAndroid.SHORT);
};
