import React, { FC } from 'react';
import { Button, FlatList, SafeAreaView, View } from 'react-native';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../store/selectors/notesSelectors';
import { removeNoteAC } from '../../store/actions/noteActions';
import { NotesNavigationName, NotesStackParamList } from '../../navigation/NotesStack/notesStack';
import { StackScreenNavigationProps } from '../../navigation/type';
import { NoteView } from '../../components/Note/NoteView';

export type NotesScreenPropsType = StackScreenNavigationProps<NotesNavigationName.NOTES, NotesStackParamList>;

export const NotesScreen: FC<NotesScreenPropsType> = props => {
  const { navigation } = props;
  const notes = useSelector(fetchNotes);

  const dispatch = useDispatch();

  const removeNote = (id: string) => {
    dispatch(removeNoteAC({ id }));
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.buttonContainer}>
        <Button title={'add new note'} onPress={() => navigation.navigate(NotesNavigationName.ADD_NOTE_ITEM)} />
      </View>
      <FlatList
        data={notes}
        renderItem={({ item, index }) => <NoteView note={item} key={item.id} removeNote={removeNote} index={index} />}
      />
    </SafeAreaView>
  );
};
