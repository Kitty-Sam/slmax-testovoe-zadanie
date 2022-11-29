import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotesScreen } from '../../screens/NotesScreen/NotesScreen';
import { NoteItemScreen } from '../../screens/NoteItemScreen/NoteItemScreen';

export const enum NotesNavigationName {
  NOTES = 'Заметки',
  NOTE_ITEM = 'Заметка',
}

export type NotesStackParamList = {
  [NotesNavigationName.NOTES]: undefined;
  [NotesNavigationName.NOTE_ITEM]: undefined;
};

const Notes = createNativeStackNavigator<NotesStackParamList>();

export const NotesStack = () => {
  return (
    <Notes.Navigator>
      <Notes.Screen name={NotesNavigationName.NOTES} component={NotesScreen} />
      <Notes.Screen name={NotesNavigationName.NOTE_ITEM} component={NoteItemScreen} />
    </Notes.Navigator>
  );
};
