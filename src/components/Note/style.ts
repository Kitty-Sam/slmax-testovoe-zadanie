import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type NoteViewStyleType = {
  container: ViewStyle;
  fullTextContainer: ViewStyle;
  root: ViewStyle;
  shortNoteContainer: ViewStyle;
  removeText: TextStyle;
  text: TextStyle;
  headerText: TextStyle;
  dateText: TextStyle;
  dropdownIcon: TextStyle;
  fullText: TextStyle;
};

export const styles = StyleSheet.create<NoteViewStyleType>({
  container: {
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    width: 300,
    justifyContent: 'center',
    paddingHorizontal: 4,
    marginVertical: 4,
  },
  root: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  removeText: {
    marginHorizontal: 4,
  },
  text: {
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: 'bold',
  },
  fullTextContainer: {
    width: 300,
  },
  fullText: {
    textAlign: 'justify',
  },
  dateText: {
    marginLeft: 200,
  },
  dropdownIcon: {
    position: 'absolute',
    right: 8,
  },
  shortNoteContainer: {
    flexDirection: 'row',
  },
});
