import { QUIZ_ID_KEY } from '../components/constants';

export function getSessionQuizID() {
  return sessionStorage.getItem(QUIZ_ID_KEY);
}
