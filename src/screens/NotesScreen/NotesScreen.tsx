import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { styles } from './style';
import { AddNote } from '../../components/AddNote/AddNote';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../store/selectors/notesSelectors';
import { Note } from '../../components/Note/Note';
import { removeNoteAC } from '../../store/actions/noteActions';

export const NotesScreen = () => {
  const notes = useSelector(fetchNotes);

  const dispatch = useDispatch();

  const removeNote = (id: string) => {
    dispatch(removeNoteAC({ id }));
  };

  return (
    <SafeAreaView style={styles.root}>
      <FlatList data={notes} renderItem={({ item }) => <Note note={item} key={item.id} removeNote={removeNote} />} />
      <View style={{ position: 'absolute', bottom: 36 }}>
        <AddNote />
      </View>
    </SafeAreaView>
  );
};
