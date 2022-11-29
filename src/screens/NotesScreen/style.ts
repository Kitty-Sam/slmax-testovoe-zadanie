import { StyleSheet, ViewStyle } from 'react-native';

export type NotesScreenStyleType = {
  root: ViewStyle;
};

export const styles = StyleSheet.create<NotesScreenStyleType>({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
