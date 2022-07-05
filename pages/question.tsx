import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FlexRowCenter } from '../styles/globalsStyles';
import { ProgressBar, QuizCard } from './components';
import { Question } from './components/QuizCard/Contents';
import { Answer } from './interfaces';
import { getQuestions, Questions } from './services/questions';

interface Props {
  questions: Questions[];
}

const QuestionScreen: NextPage<Props> = ({ questions }) => {
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

  function navigateToEnd() {
    router.push('/end');
  }

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
  return {
    props: {
      questions,
    },
  };
}
