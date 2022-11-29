import { AppStoreType } from '../store';

export const fetchNotes = (state: AppStoreType) => state.notes!.notes;
