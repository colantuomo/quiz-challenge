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
