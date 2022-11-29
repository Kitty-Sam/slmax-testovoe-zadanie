import { AppStoreType } from '../store';

export const getAppStatus = (state: AppStoreType) => state.app.status;
