import React, { FC, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text } from 'react-native';
import { NoteType } from '../../screens/AddNoteItemScreen/AddNoteItemScreen';
import { styles } from './style';

export type NotePropsType = {
  note: NoteType;
  removeNote: (id: string) => void;
  index: number;
};

export const Note: FC<NotePropsType> = props => {
  const { note, removeNote } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: note.text, value: note.text, disabled: true }]);

  return (
    <View style={styles.dropdownBlock}>
      <DropDownPicker
        dropDownContainerStyle={styles.dropdownNativeContainer}
        labelProps={{
          numberOfLines: 10,
        }}
        onSelectItem={item => console.log(item)}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        translation={{
          PLACEHOLDER: `${note.header} | ${note.text.slice(0, 20)}`,
        }}
        containerStyle={styles.dropdownContainer}
      />
      <Text style={styles.removeText} onPress={() => removeNote(note.id)}>
        X
      </Text>
    </View>
  );
};
