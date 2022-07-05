/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import { Answer } from '../../../../interfaces';
import { Button } from '../../../Button/style';
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

export function End() {
  const router = useRouter();
  function renderIcons() {
    return answers.map(({ isCorrect }) => {
      return isCorrect ? <Check /> : <Blocked />;
    });
  }
  return (
    <Container>
      <IconsContainer>{renderIcons()}</IconsContainer>
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
