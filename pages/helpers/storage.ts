import { QUIZ_ID_KEY } from '../components/constants';

export function getSessionQuizID() {
  return sessionStorage.getItem(QUIZ_ID_KEY);
}

export function setSessionQuizID(id: string) {
  sessionStorage.setItem(QUIZ_ID_KEY, id);
}
