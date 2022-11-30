import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NoteType } from '../../screens/AddNoteItemScreen/AddNoteItemScreen';
import { getDate } from '../../utiles/getDate';
import { styles } from './style';

export type NotePropsType = {
  note: NoteType;
  removeNote: (id: string) => void;
  index: number;
};

export const NoteView: FC<NotePropsType> = props => {
  const { note, removeNote } = props;
  const [isShown, setIsShown] = useState<boolean>(false);

  const date = getDate(note.data);

  return (
    <TouchableOpacity style={styles.root}>
      <TouchableOpacity onLongPress={() => removeNote(note.id)}>
        <View style={styles.container}>
          <View style={styles.shortNoteContainer}>
            <Text style={styles.headerText}>{note.header + ' |'}</Text>
            <Text style={styles.text}>{note.text.slice(0, 20)}</Text>
          </View>
          <Text style={styles.dropdownIcon} onPress={() => setIsShown(!isShown)}>
            {isShown ? '*' : '^'}
          </Text>
        </View>
        {isShown ? (
          <View style={styles.fullTextContainer}>
            <Text style={styles.dateText}>{date}</Text>
            <Text style={styles.fullText}>{note.text}</Text>
          </View>
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
