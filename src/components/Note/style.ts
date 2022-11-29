import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type NoteStyleType = {
  container: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<NoteStyleType>({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
    height: 40,
    marginVertical: 8,
  },
  text: {
    textAlign: 'center',
  },
});
