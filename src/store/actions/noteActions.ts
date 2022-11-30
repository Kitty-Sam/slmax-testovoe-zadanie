import { NoteType } from '../../screens/AddNoteItemScreen/AddNoteItemScreen';

export enum NoteActions {
  ADD_NOTE = 'ADD_NOTE',
  REMOVE_NOTE = 'REMOVE_NOTE',
  FETCH_NOTES = 'FETCH_NOTES',
}

export type RemoveNotePayload = {
  id: string;
};

export const addNewNoteAC: AddNoteActionType = (payload: NoteType) => ({
  type: NoteActions.ADD_NOTE,
  payload,
});

export type AddNoteActionType = (payload: NoteType) => {
  payload: NoteType;
  type: NoteActions.ADD_NOTE;
};

export const removeNoteAC: RemoveNoteActionType = (payload: RemoveNotePayload) => ({
  type: NoteActions.REMOVE_NOTE,
  payload,
});

export type RemoveNoteActionType = (payload: RemoveNotePayload) => {
  payload: RemoveNotePayload;
  type: NoteActions.REMOVE_NOTE;
};

export const fetchNotesAC: FetchNotesActionType = (payload: NoteType[]) => ({
  type: NoteActions.FETCH_NOTES,
  payload,
});

export type FetchNotesActionType = (payload: NoteType[]) => {
  payload: NoteType[];
  type: NoteActions.FETCH_NOTES;
};
