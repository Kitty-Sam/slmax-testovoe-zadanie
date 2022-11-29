import React from 'react';
import { NotesStack } from './src/navigation/NotesStack/notesStack';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <NotesStack />
    </NavigationContainer>
  );
};
