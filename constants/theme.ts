import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#1E1E1E',
    card: '#333333',
    text: '#ffffff',
    primary: '#BB86FC',
    border: '#444444',
  },
};

export const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    card: '#f1f1f1',
    text: '#000000',
    primary: '#6200EE',
    border: '#DDDDDD',
  },
};
