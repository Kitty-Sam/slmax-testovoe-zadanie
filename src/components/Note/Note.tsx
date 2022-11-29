import React, { FC, useState } from 'react';
import { NotePropsType } from '../AddNote/AddNote';
import DropDownPicker from 'react-native-dropdown-picker';

export const Note: FC<NotePropsType> = props => {
  const { note, removeNote } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: note.header, value: note.text }]);

  return (
    <DropDownPicker
      // onPress={() => removeNote(note.id)}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      zIndexInverse={3000}
      translation={{
        PLACEHOLDER: `${note.header} ${note.text.slice(0, 20)}`,
      }}
      containerStyle={{ width: 300, marginVertical: 8 }}
    />
  );
};
