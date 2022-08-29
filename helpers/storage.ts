import { QUIZ_ID_KEY } from './constants';
import { Answer } from '../interfaces';
import { isClientSide } from '.';

export function getSessionQuizAnswers(): Answer[] {
  if (!isClientSide) return [];
  const answers = sessionStorage.getItem(QUIZ_ID_KEY);
  if (!answers) return [];
  return JSON.parse(answers ?? '') ?? [];
}

export function setSessionQuizAnswers(answers: Answer[]) {
  sessionStorage.setItem(QUIZ_ID_KEY, JSON.stringify(answers));
}
