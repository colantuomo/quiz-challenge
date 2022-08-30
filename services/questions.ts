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

export async function getQuestions() {
  const QUESTIONS_URL =
    'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple&encode=url3986';
  const response = await fetch(QUESTIONS_URL);
  const data = (await response.json()) as OpenTDBtype;
  return data.results.map(adaptQuestion);
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function adaptQuestion({
  question,
  incorrect_answers,
  correct_answer,
}: OpenTDBtQuestions): Questions {
  const correctAnswer = decodeURIComponent(correct_answer);
  const answers = incorrect_answers
    .map((answer) => decodeURIComponent(answer))
    .concat(correctAnswer);
  return {
    question: decodeURIComponent(question),
    answers: shuffleArray(answers),
    correctAnswer,
  };
}
