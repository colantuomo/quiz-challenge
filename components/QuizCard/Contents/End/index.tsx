import { useCallback } from 'react';
import { useRouter } from 'next/router';
import Fireworks from '@fireworks-js/react';

import { MIN_CORRECT_ANSWERS } from '../../../../helpers/constants';
import { Answer } from '../../../../interfaces';
import { Button } from '../../../Button';
import { Blocked, Check } from '../../../Icons';
import { Subtitle, Title } from '../../../Typography/styles';
import { Container, IconsContainer, MainContent } from './styles';

interface Props {
  answers?: Answer[];
}

export function End({ answers }: Props) {
  const router = useRouter();

  function passedTheTest() {
    const correctAnswers = answers?.filter(({ isCorrect }) => isCorrect).length;
    return correctAnswers && correctAnswers >= MIN_CORRECT_ANSWERS;
  }

  const renderIcons = useCallback(() => {
    if (answers && answers?.length === 0) return;
    return answers?.map(({ isCorrect }, idx) => {
      return isCorrect ? <Check key={idx} /> : <Blocked key={idx} />;
    });
  }, [answers]);

  const buildTitle = useCallback(() => {
    if (answers?.length === 0) return;
    const correctAnswers = answers?.filter(({ isCorrect }) => isCorrect).length;
    const totalAnswers = answers?.length;
    return `You got ${correctAnswers} out of ${totalAnswers} correct`;
  }, [answers]);

  function buildScreenInfosByCorrectAnswers() {
    if (passedTheTest()) {
      return {
        title: buildTitle(),
        subTitle: 'Yeyyyy! You passed the test',
        buttonTitle: 'Another shot?',
      };
    }
    return {
      title: buildTitle(),
      subTitle: `To pass the test, you need get at least ${MIN_CORRECT_ANSWERS} answers right`,
      buttonTitle: 'Try Again',
    };
  }

  const { title, subTitle, buttonTitle } = buildScreenInfosByCorrectAnswers();

  return (
    <Container>
      {passedTheTest() && (
        <Fireworks
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: 'transparent',
          }}
        />
      )}

      <IconsContainer>{renderIcons()}</IconsContainer>
      <MainContent>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
      </MainContent>
      <Button onClick={() => router.push('/')}>{buttonTitle}</Button>
    </Container>
  );
}
