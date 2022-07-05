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
    'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple';
  const response = await fetch(QUESTIONS_URL);
  const data = (await response.json()) as OpenTDBtype;
  return data.results.map(adaptQuestion);
}

function adaptQuestion({
  question,
  incorrect_answers,
  correct_answer,
}: OpenTDBtQuestions): Questions {
  return {
    question,
    answers: incorrect_answers.concat(correct_answer),
    correctAnswer: correct_answer,
  };
}
