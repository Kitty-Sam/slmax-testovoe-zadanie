import React, { FC, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text } from 'react-native';
import { NoteType } from '../../screens/AddNoteItemScreen/AddNoteItemScreen';

export type NotePropsType = {
  note: NoteType;
  removeNote: (id: string) => void;
};

export const Note: FC<NotePropsType> = props => {
  const { note, removeNote } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: note.text, value: note.text }]);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        zIndexInverse={3000}
        translation={{
          PLACEHOLDER: `${note.header} | ${note.text.slice(0, 20)}`,
        }}
        containerStyle={{ width: 300, marginVertical: 8 }}
      />
      <Text style={{ marginHorizontal: 10 }} onPress={() => removeNote(note.id)}>
        X
      </Text>
    </View>
  );
};
