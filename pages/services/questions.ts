import useSWR from 'swr';
import { Answer } from '../interfaces';

interface OpenTDBtQuestions {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface OpenTDBtype {
  response_code: number;
  results: OpenTDBtQuestions[];
}

export interface Questions {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface Quiz {
  id: string;
  startDate: Date;
  endDate?: Date;
}

export async function getQuestions() {
  const QUESTIONS_URL =
    'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple&encode=url3986';
  const response = await fetch(QUESTIONS_URL);
  const data = (await response.json()) as OpenTDBtype;
  return data.results.map(adaptQuestion);
}

function adaptQuestion({
  question,
  incorrect_answers,
  correct_answer,
}: OpenTDBtQuestions): Questions {
  const correctAnswer = decodeURIComponent(correct_answer);
  return {
    question: decodeURIComponent(question),
    answers: incorrect_answers
      .map((answer) => decodeURIComponent(answer))
      .concat(correctAnswer),
    correctAnswer,
  };
}

export function useStartQuiz() {
  return useSWR('/api/question', startQuiz);
}

export async function startQuiz(url: string): Promise<Quiz> {
  const request = await fetch(url, {
    method: 'POST',
  });
  return await request.json();
}

export async function endQuiz(id: string, answers: Answer[]): Promise<Quiz> {
  const URL = `/api/question?id=${id}`;
  const body = JSON.stringify({ answers });
  const request = await fetch(URL, {
    method: 'PUT',
    body,
  });
  return await request.json();
}

export async function getQuiz(id: string) {
  const URL = `/api/question?id=${id}`;
  const request = await fetch(URL);
  return await request.json();
}
