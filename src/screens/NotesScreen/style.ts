import { StyleSheet, ViewStyle } from 'react-native';

export type NotesScreenStyleType = {
  root: ViewStyle;
  buttonContainer: ViewStyle;
};

export const styles = StyleSheet.create<NotesScreenStyleType>({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
