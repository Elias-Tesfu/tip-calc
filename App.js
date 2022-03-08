import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1a5c20',
    accent: 'yellow',
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <HomeScreen />
    </PaperProvider>
  );
}

