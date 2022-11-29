export function* watchClickSaga() {
  console.log('saga start');
}

export default function* rootSaga() {
  yield watchClickSaga();
}
