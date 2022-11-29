import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type AddNoteStyleType = {
  titleInput: TextStyle;
  textInput: TextStyle;
  noteContainer: ViewStyle;
  buttonContainer: ViewStyle;
};

export const styles = StyleSheet.create<AddNoteStyleType>({
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
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '90%',
    borderRadius: 4,
    padding: 10,
    height: 50,
    marginVertical: 10,
  },
  buttonContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
