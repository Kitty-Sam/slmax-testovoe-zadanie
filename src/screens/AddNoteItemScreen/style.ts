import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type AddNoteStyleType = {
  titleInput: TextStyle;
  textInput: TextStyle;
  noteContainer: ViewStyle;
  buttonContainer: ViewStyle;
  root: ViewStyle;
};

export const styles = StyleSheet.create<AddNoteStyleType>({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  noteContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
  },
  titleInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderRadius: 4,
    width: '90%',
    padding: 10,
  },
  textInput: {
    width: '90%',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    position: 'absolute',
    right: 18,
    bottom: 0,
  },
});
