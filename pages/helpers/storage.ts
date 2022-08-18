import { QUIZ_ID_KEY } from './constants';
import { Answer } from '../interfaces';

export function getSessionQuizAnswers(): Answer[] {
  const answers = sessionStorage.getItem(QUIZ_ID_KEY);
  return JSON.parse(answers ?? '') ?? [];
}

export function setSessionQuizAnswers(answers: Answer[]) {
  sessionStorage.setItem(QUIZ_ID_KEY, JSON.stringify(answers));
}
