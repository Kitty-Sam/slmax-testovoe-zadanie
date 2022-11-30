import { addNewNoteAC, fetchNotesAC, NoteActions, removeNoteAC } from '../actions/noteActions';
import { NoteType } from '../../screens/AddNoteItemScreen/AddNoteItemScreen';

const initialState: initialStateType = {
  notes: [
    {
      id: '1234',
      header: 'New Note',
      text: 'I should create new note',
      data: new Date(),
    },
  ],
};

type initialStateType = {
  notes: NoteType[];
};

export const noteReducer = (state: initialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case NoteActions.ADD_NOTE:
      {
        const { id, header, text, data } = action.payload;
        const hasNote = state.notes.find(note => note.id === id);

        if (!hasNote) {
          const newNote: NoteType = {
            id,
            header,
            text,
            data,
          };
          return {
            ...state,
            notes: [...state.notes, newNote],
          };
        }
      }
      break;

    case NoteActions.REMOVE_NOTE: {
      const { id } = action.payload;
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== id),
      };
    }

    case NoteActions.FETCH_NOTES: {
      return {
        ...state,
        notes: action.payload,
      };
    }

    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof addNewNoteAC> | ReturnType<typeof removeNoteAC> | ReturnType<typeof fetchNotesAC>;
