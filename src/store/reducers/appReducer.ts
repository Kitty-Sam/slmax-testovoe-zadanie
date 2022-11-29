import { AppActions, toggleAppStatus } from '../actions/appActions';

export enum requestStatus {
  FAILED = 'FAILED',
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
}

const initialState = {
  status: requestStatus.LOADING,
};

type initialStateType = {
  status: RequestStatusType;
};

export type RequestStatusType = requestStatus;

export const appReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case AppActions.APP_SET_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof toggleAppStatus>;
