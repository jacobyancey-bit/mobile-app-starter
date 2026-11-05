import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/tokens';
import { AuthNavigator } from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthNavigator
          onAuthenticated={(user) => {
            // Scaffold callback: connect your post-auth state or home screen here
            console.log('Authentication triggered:', user);
          }}
        />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

