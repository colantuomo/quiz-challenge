/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getSessionQuizID } from '../../../../helpers/storage';
import { Answer, Quiz } from '../../../../interfaces';
import { Button } from '../../../Button/style';
import { QUIZ_ID_KEY } from '../../../constants';
import { Blocked, Check } from '../../../Icons';
import { Subtitle, Title } from '../../../Typography/styles';
import { Container, IconsContainer, MainContent } from './styles';

const answers: Answer[] = [
  {
    answer: 'some text',
    isCorrect: true,
    question: 0,
  },
  {
    answer: 'some text',
    isCorrect: false,
    question: 0,
  },
  {
    answer: 'some text',
    isCorrect: true,
    question: 0,
  },
  {
    answer: 'some text',
    isCorrect: true,
    question: 0,
  },
];

interface Props {
  quiz: Quiz;
}

export function End({ quiz }: Props) {
  const router = useRouter();
  console.log('quiz ', quiz);
  function renderIcons() {
    if (quiz && quiz.answers?.length === 0) return;
    return quiz.answers.map(({ isCorrect }, idx) => {
      return isCorrect ? <Check key={idx} /> : <Blocked key={idx} />;
    });
  }

  useEffect(() => {
    const quizId = getSessionQuizID();
    if (!quizId) router.push('/');
  }, [router]);

  return (
    <Container>
      {/* <IconsContainer>{renderIcons()}</IconsContainer> */}
      <MainContent>
        <Title>You've reached 6 out of 10</Title>
        <Subtitle>
          To pass the test, you need get at least 7 answers right
        </Subtitle>
      </MainContent>
      <Button onClick={() => router.push('/')}>Try Again</Button>
    </Container>
  );
}
