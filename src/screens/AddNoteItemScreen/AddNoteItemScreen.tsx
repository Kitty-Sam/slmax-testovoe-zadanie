import React, { FC, useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewNoteAC } from '../../store/actions/noteActions';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackScreenNavigationProps } from '../../navigation/type';
import { NotesNavigationName, NotesStackParamList } from '../../navigation/NotesStack/notesStack';

export type NoteType = {
  id: string;
  header: string;
  text: string;
  data: string;
};

export type AddNoteItemScreenPropsType = StackScreenNavigationProps<
  NotesNavigationName.ADD_NOTE_ITEM,
  NotesStackParamList
>;

export const AddNoteItemScreen: FC<AddNoteItemScreenPropsType> = _props => {
  const [createdNoteTitle, setCreatedNoteTitle] = useState<string>('');
  const [createdNoteText, setCreatedNoteText] = useState<string>('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addNewNote = () => {
    if (createdNoteText.trim() === '' || createdNoteTitle.trim() === '') {
      Alert.alert('Fill the gaps');
      return;
    }
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
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.root}>
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
          multiline={true}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title={'add'} onPress={() => addNewNote()} />
        <Button
          color={'red'}
          title={'clear'}
          onPress={() => {
            setCreatedNoteText('');
            setCreatedNoteTitle('');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
