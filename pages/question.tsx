import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { FlexRowCenter } from '../styles/globalsStyles';
import { ProgressBar, QuizCard } from './components';
import { Question } from './components/QuizCard/Contents';
import { setSessionQuizAnswers } from './helpers/storage';
import { Answer } from './interfaces';
import { getQuestions, Questions } from './services/questions';
interface Props {
  questions: Questions[];
}

const QuestionScreen: NextPage<Props> = ({ questions }: Props) => {
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
      return;
    }
    setQuestionCount(nextIndex);
  }

  function getCurrentProgress() {
    const startNumber = questionCount + 1;
    return (startNumber / questions.length) * 100;
  }

  useEffect(() => {
    if (answers.length === questions.length) {
      setSessionQuizAnswers(answers);
      router.push('/end');
    }
  }, [answers, questions, router]);

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

export async function getServerSideProps() {
  const questions = await getQuestions();
  return {
    props: {
      questions,
    },
  };
}
