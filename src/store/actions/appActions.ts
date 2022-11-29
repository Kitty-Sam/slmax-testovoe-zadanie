import { RequestStatusType } from '../reducers/appReducer';

export enum AppActions {
  APP_SET_STATUS = 'APP_SET_STATUS',
}

export const toggleAppStatus: AppStatusToggleActionType = (payload: RequestStatusType) => ({
  type: AppActions.APP_SET_STATUS,
  payload,
});
export type AppStatusToggleActionType = (payload: RequestStatusType) => {
  payload: RequestStatusType;
  type: AppActions.APP_SET_STATUS;
};
