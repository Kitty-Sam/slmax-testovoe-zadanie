import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotesScreen } from '../../screens/NotesScreen/NotesScreen';
import { NoteItemScreen } from '../../screens/NoteItemScreen/NoteItemScreen';
import { AddNoteItemScreen } from '../../screens/AddNoteItemScreen/AddNoteItemScreen';

export const enum NotesNavigationName {
  NOTES = 'Notes',
  NOTE_ITEM = 'Current note',
  ADD_NOTE_ITEM = 'Add new note',
}

export type NotesStackParamList = {
  [NotesNavigationName.NOTES]: undefined;
  [NotesNavigationName.NOTE_ITEM]: undefined;
  [NotesNavigationName.ADD_NOTE_ITEM]: undefined;
};

const Notes = createNativeStackNavigator<NotesStackParamList>();

export const NotesStack = () => {
  return (
    <Notes.Navigator>
      <Notes.Screen name={NotesNavigationName.NOTES} component={NotesScreen} />
      <Notes.Screen name={NotesNavigationName.NOTE_ITEM} component={NoteItemScreen} />
      <Notes.Screen name={NotesNavigationName.ADD_NOTE_ITEM} component={AddNoteItemScreen} />
    </Notes.Navigator>
  );
};
