import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type NoteStyleType = {
  dropdownContainer: ViewStyle;
  dropdownBlock: ViewStyle;
  dropdownNativeContainer: ViewStyle;
  removeText: TextStyle;
};

export const styles = StyleSheet.create<NoteStyleType>({
  dropdownContainer: {
    width: '90%',
    marginVertical: 8,
  },
  removeText: {
    marginHorizontal: 10,
  },
  dropdownNativeContainer: {
    height: 400,
    padding: 20,
  },
  dropdownBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
