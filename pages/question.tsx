import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FlexRowCenter } from '../styles/globalsStyles';
import { ProgressBar, QuizCard } from './components';
import { Question } from './components/QuizCard/Contents';
import { Answer } from './interfaces';
import {
  endQuiz,
  getQuestions,
  Questions,
  startQuiz,
} from './services/questions';
interface Props {
  questions: Questions[];
  quizId: string;
}

const QuestionScreen: NextPage<Props> = ({ questions, quizId }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [questionCount, setQuestionCount] = useState(0);
  const router = useRouter();

  function renderQuestion() {
    const { question, answers, correctAnswer } = questions[questionCount];
    return (
      <Question
        question={question}
        answers={answers}
        correctAnswer={correctAnswer}
        onSelected={(answer) => setAnswer(answer)}
      />
    );
  }

  function setAnswer(answer: string) {
    const { question, correctAnswer } = questions[questionCount];
    const isCorrect = answer === correctAnswer;
    setAnswers([
      ...answers,
      { question: questionCount, answer: question, isCorrect },
    ]);
    setNextQuestion();
  }

  function setNextQuestion() {
    const nextIndex = questionCount + 1;
    const nextQuestion = questions[nextIndex];
    if (!nextQuestion) {
      navigateToEnd();
      return;
    }
    setQuestionCount(nextIndex);
  }

  function getCurrentProgress() {
    const startNumber = questionCount + 1;
    return (startNumber / questions.length) * 100;
  }

  async function navigateToEnd() {
    const quiz = await endQuiz(quizId, answers);
    router.push('/end');
  }

  useEffect(() => {
    if (!quizId) router.push('/');
  }, [quizId, router]);

  return (
    <FlexRowCenter>
      <QuizCard>
        <ProgressBar progress={getCurrentProgress()} />
        {renderQuestion()}
      </QuizCard>
    </FlexRowCenter>
  );
};

export default QuestionScreen;

export async function getStaticProps() {
  const questions = await getQuestions();
  const { id } = await startQuiz();
  return {
    props: {
      questions,
      quizId: id,
    },
  };
}
