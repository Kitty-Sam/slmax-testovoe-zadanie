import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewNoteAC } from '../../store/actions/noteActions';
import { styles } from './style';

export type NoteType = {
  id: string;
  header: string;
  text: string;
  data: string;
};

export type NotePropsType = {
  note: NoteType;
  removeNote: (id: string) => void;
};

export const AddNote = () => {
  const [createdNoteTitle, setCreatedNoteTitle] = useState<string>('');
  const [createdNoteText, setCreatedNoteText] = useState<string>('');

  const dispatch = useDispatch();

  const addNewNote = () => {
    dispatch(
      addNewNoteAC({
        id: String(Date.now()),
        header: createdNoteTitle,
        text: createdNoteText,
        data: String(Date.now()),
      }),
    );
    setCreatedNoteText('');
    setCreatedNoteTitle('');
  };

  return (
    <View style={styles.noteContainer}>
      <TextInput
        placeholder={'Название'}
        value={createdNoteTitle}
        onChangeText={setCreatedNoteTitle}
        style={styles.titleInput}
      />
      <TextInput
        placeholder={'Текст описание'}
        value={createdNoteText}
        onChangeText={setCreatedNoteText}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={() => addNewNote()} style={styles.buttonContainer}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};
